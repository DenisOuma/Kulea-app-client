import React from "react";
import { DashBoardTopNavBar } from "../../navigationbar/DashBoardTopNavBar";
import { SugarPricesTable } from "./SugarPricesTable";

export const UserDashboardPriceIndex = () => {
	return (
		<div className="bg-white-900 nv-content-section">
			<DashBoardTopNavBar />
			<SugarPricesTable />
		</div>
	);
};
