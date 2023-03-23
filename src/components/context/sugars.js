import { createContext, useState } from "react";
import axios from "axios";

const SugarContext = createContext();

const Provider = ({ children }) => {
	const [sugars, setSugars] = useState([]);

	const sugarsData = {
		sugars,
	};

	return (
		<SugarContext.Provider value={sugarsData}>{children}</SugarContext.Provider>
	);
};

export { Provider };
export default SugarContext;
