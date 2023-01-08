export interface CreatureFamily {
	name: string;
}

export interface Stats {
	power: number;
	health: number;
	speed: number;
}

export interface Pet {
	name: string;
	creature_id: number;
	creature_family: CreatureFamily;
	level: number;
	quality_id: number;
	stats: Stats;
	is_favorite: boolean;
	is_first_ability_slot_selected: boolean;
	is_second_ability_slot_selected: boolean;
	is_third_ability_slot_selected: boolean;
}

export interface PetApiResponse {
	pets: Pet[];
}
