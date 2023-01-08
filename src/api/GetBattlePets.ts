import axios from "axios";
import { PetApiResponse } from "../models/Pets";
import { getAccessToken2 } from "./GetAccessToken";

interface BattlePetMap {
	[key: string]: any;
}

export async function getPlayerBattlePets(
	playerName: string,
	realm: string
): Promise<BattlePetMap> {
	const region = "us"; // The region for the API call
	const namespace = "static-us"; // The namespace for the API call
	const accessToken = await getAccessToken2();

	// Make the API call to get the player's character data
	const characterResponse = await axios.get(
		`https://${region}.api.blizzard.com/wow/character/${realm}/${playerName}`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Battlenet-Namespace": namespace,
			},
		}
	);

	// Extract the character's ID from the response data
	const characterId = characterResponse.data.id;

	// Make the API call to get the character's battle pets
	const petsResponse = await axios.get<PetApiResponse>(
		`https://${region}.api.blizzard.com/character/${realm}/${characterId}/pets`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Battlenet-Namespace": namespace,
			},
		}
	);

	// Create a map of battle pets, keyed by their name
	const battlePets: BattlePetMap = {};
	petsResponse.data.pets.forEach((pet) => {
		battlePets[pet.name] = {
			name: pet.name,
			type: pet.creature_family.name,
		};
	});

	return battlePets;
}
