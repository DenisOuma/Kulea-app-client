import React from "react";
import { DashboardLogoImg } from "./DashboardLogoImg";
import { DashBoardSideBarIcon } from "./DashBoardSideBarIcon";
import { BiWorld } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiCargoShip } from "react-icons/gi";
import { HiVolumeUp, HiSwitchHorizontal } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";

export const DashBoardSidebar = () => {
	return (
		<div style={{ background: "#09101D" }}>
			<DashboardLogoImg />
			<DashBoardSideBarIcon>
				<BiWorld />
			</DashBoardSideBarIcon>
			<DashBoardSideBarIcon>
				<HiOutlineCurrencyDollar />
			</DashBoardSideBarIcon>
			<DashBoardSideBarIcon>
				<GiCargoShip />
			</DashBoardSideBarIcon>
			<DashBoardSideBarIcon>
				<HiVolumeUp />
			</DashBoardSideBarIcon>
			<DashBoardSideBarIcon>
				<FaBalanceScale />
			</DashBoardSideBarIcon>
			<DashBoardSideBarIcon>
				<HiSwitchHorizontal />
			</DashBoardSideBarIcon>
		</div>
	);
};
