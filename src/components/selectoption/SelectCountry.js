import React from "react";
import { useState } from "react";
import useSugarsContext from "../hooks/use-sugars-context";
import { SugarPricesTable } from "../pages/dashboardpage/SugarPricesTable";

export const SelectCountry = () => {
	const [select, setSelected] = useState("");
	const { getLatestSugarPrice, latestPrice } = useSugarsContext();
	const handleFilterChange = (e) => {
		const selectedCountry = e.target.value;
		getLatestSugarPrice(selectedCountry);
		setSelected(selectedCountry);
	};
	return (
		<div className="option-container mt-8 w-5/6 ">
			<div className="flex justify-end">
				<label htmlFor="sugar Price" className="text-lg mx-9">
					Select Country
				</label>
				<div className="filter-select-container">
					<select
						className="filter-select"
						onChange={handleFilterChange}
						value={select}
					>
						{/* <option value="">All countries</option> */}
						<option value="Kenya">Kenya</option>
						<option value="Uganda">Uganda</option>
						<option value="Nigeria">Nigeria</option>
					</select>
				</div>
			</div>
			<h1>Latest Sugar Price for {select}</h1>
			<SugarPricesTable sugars={latestPrice} />
		</div>
	);
};
