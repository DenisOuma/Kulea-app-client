/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			// setting ap my default applications color theme
			colors: {
				"primary-app-color": "#09101D",
				"dashboard-app-color": "#F3F2EF",
			},
		},
	},
	plugins: [],
};
