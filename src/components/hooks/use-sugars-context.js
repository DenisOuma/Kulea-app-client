import { useContext } from "react";
import SugarContext from "../context/sugars";

// Defining the custom hook for the sugar context
function useSugarsContext() {
	return useContext(SugarContext);
}

export default useSugarsContext;
