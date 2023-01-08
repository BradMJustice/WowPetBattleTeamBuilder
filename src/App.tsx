import { useEffect } from "react";
import { getPlayerBattlePets } from "./api/GetBattlePets";
import BattlePetDropdownMenu from "./components/BattlePetDropdownMenu";

const App = () => {
	useEffect(() => {
		getPlayerBattlePets("Jubbjub", "azjolnerub");
	}, []);

	return <BattlePetDropdownMenu />;
};

export default App;
