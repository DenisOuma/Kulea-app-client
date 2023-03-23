import { useContext } from "react";
import SugarContext from "../context/sugars";

function useSugarsContext() {
	return useContext(SugarContext);
}

export default useSugarsContext;
