import React from "react";
import { DashBoardTopNavBar } from "../../navigationbar/DashBoardTopNavBar";
import { SelectCountry } from "../../selectoption/SelectCountry";
import { SugarPricesTable } from "./SugarPricesTable";
import useSugarsContext from "../../hooks/use-sugars-context";

export const UserDashboardPriceIndex = () => {
	const { sugars } = useSugarsContext();
	return (
		<div className="bg-white-900 nv-content-section">
			<DashBoardTopNavBar />
			<div className="table-container">
				<SelectCountry />
				<SugarPricesTable sugars={sugars} />
			</div>
		</div>
	);
};
