import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../constants/oauth";
import { ClientCredentials } from "simple-oauth2";

const config = {
	client: {
		id: CLIENT_ID,
		secret: CLIENT_SECRET,
	},
	auth: {
		tokenHost: "https://oauth.battle.net",
	},
};

export const getAccessToken2 = async () => {
	const client = new ClientCredentials(config);

	const tokenParams = {
		scope: "wow.profile",
	};

	try {
		const accessToken = await client.getToken(tokenParams);
	} catch (error) {
		console.log("Access Token error", error);
	}
};

export async function getAccessToken(clientId: string, clientSecret: string): Promise<string> {
	// Make the API call to get the access token
	const response = await axios.post(
		"https://oauth.battle.net/token",
		{
			grant_type: "client_credentials",
			region: "us",
			scope: "wow.profile",
		},
		{
			auth: {
				username: clientId,
				password: clientSecret,
			},
		}
	);

	// Extract the access token from the response data
	const accessToken = response.data.access_token;

	return accessToken;
}
