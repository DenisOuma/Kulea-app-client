import { UserDashboardPriceIndex } from "./components/pages/dashboardpage/UserDashboardPriceIndex";
import useSugarsContext from "./components/hooks/use-sugars-context";

function App() {
	const { sugars } = useSugarsContext();

	console.log(sugars);
	return (
		<div className="App">
			<h1 className="bg-primary-app-color text-3xl font-bold underline ">
				Hello world!
			</h1>
			<UserDashboardPriceIndex />
		</div>
	);
}

export default App;
