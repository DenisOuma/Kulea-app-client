import { UserDashboardPriceIndex } from "./components/pages/dashboardpage/UserDashboardPriceIndex";
import useSugarsContext from "./components/hooks/use-sugars-context";
import { DashBoardSidebar } from "./components/sidebar/DashBoardSidebar";
import { useEffect } from "react";

function App() {
	const { getSugarPrices } = useSugarsContext();
	useEffect(() => {
		getSugarPrices();
	}, [getSugarPrices]);

	return (
		<div className="App flex bg-dashboard-app-color h-screen">
			<DashBoardSidebar />
			<UserDashboardPriceIndex />
		</div>
	);
}

export default App;
