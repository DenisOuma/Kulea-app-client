import { createContext, useState, useCallback } from "react";
import axios from "axios";

const SugarContext = createContext();

const Provider = ({ children }) => {
	const [sugars, setSugars] = useState([]);
	const [latestPrice, setLatesPrice] = useState([]);

	const getSugarPrices = useCallback(async () => {
		try {
			const { data } = await axios.get("http://localhost:5000/prices");
			setSugars((prev) => [...data, ...sugars]);
		} catch (error) {
			console.log("error");
		}
	}, []);
	console.log(sugars);

	const getLatestSugarPrice = async (country) => {
		try {
			const { data } = await axios.get(
				`http://localhost:5000/prices/${country}`
			);
			setLatesPrice((prev) => [data]);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(latestPrice);
	const sugarsData = {
		sugars,
		getSugarPrices,
		getLatestSugarPrice,
	};

	return (
		<SugarContext.Provider value={sugarsData}>{children}</SugarContext.Provider>
	);
};

export { Provider };
export default SugarContext;
