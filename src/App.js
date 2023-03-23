import { UserDashboardPriceIndex } from "./components/pages/dashboardpage/UserDashboardPriceIndex";
import useSugarsContext from "./components/hooks/use-sugars-context";

function App() {
	const { sugars } = useSugarsContext();

	console.log(sugars);
	return (
		<div className="App">
			<UserDashboardPriceIndex />
		</div>
	);
}

export default App;
