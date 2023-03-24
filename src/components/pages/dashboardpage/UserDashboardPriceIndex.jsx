import React from "react";
import { DashBoardTopNavBar } from "../../navigationbar/DashBoardTopNavBar";
import { SelectCountry } from "../../selectoption/SelectCountry";
import { SugarPricesTable } from "./SugarPricesTable";

export const UserDashboardPriceIndex = () => {
	return (
		<div className="bg-white-900 nv-content-section">
			<DashBoardTopNavBar />
			<div className="table-container">
				<SelectCountry />
				<SugarPricesTable />
			</div>
		</div>
	);
};
