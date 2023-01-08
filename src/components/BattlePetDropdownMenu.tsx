import React, { useState } from "react";

const BattlePetTypes: Array<string> = [
	"Aquatic",
	"Beast",
	"Critter",
	"Dragonkin",
	"Elemental",
	"Flying",
	"Humanoid",
	"Magic",
	"Mechanical",
	"Undead",
];

function BattlePetDropdownMenu() {
	const [type1, setType1] = useState("");
	const [type2, setType2] = useState("");
	const [type3, setType3] = useState("");

	return (
		<div>
			<label htmlFor="type1">Type 1:</label>
			<select id="type1" value={type1} onChange={(e) => setType1(e.target.value)}>
				<option value="">--Please choose a type--</option>
				{BattlePetTypes.sort().map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
			<br />
			<label htmlFor="type2">Type 2:</label>
			<select id="type2" value={type2} onChange={(e) => setType2(e.target.value)}>
				<option value="">--Please choose a type--</option>
				{BattlePetTypes.sort().map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
			<br />
			<label htmlFor="type3">Type 3:</label>
			<select id="type3" value={type3} onChange={(e) => setType3(e.target.value)}>
				<option value="">--Please choose a type--</option>
				{BattlePetTypes.sort().map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</div>
	);
}

export default BattlePetDropdownMenu;
