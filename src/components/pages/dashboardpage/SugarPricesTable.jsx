import React from "react";
export const SugarPricesTable = ({ sugars }) => {
	const tableData = sugars.map((sugar, index) => {
		const quantity = sugar.quantity.replace(/kg/gi, "");
		const name = sugar.sugar_name.replace(/[-\d]+kg/gi, "").trim();
		const date = new Date(sugar.date).toLocaleDateString("en-GB");
		return (
			<tr key={index}>
				<td>{name.replace(/–|-/g, "")}</td>
				<td>{quantity}</td>
				<td>{sugar.price}</td>
				<td>{sugar.country}</td>
				<td>{date}</td>
			</tr>
		);
	});

	return (
		<div className="container">
			<h1 className="country-lable">Sugar Prices</h1>
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Qty (kg)</th>
						<th>Price</th>
						<th>Country</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>{tableData}</tbody>
			</table>
		</div>
	);
};
