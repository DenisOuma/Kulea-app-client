/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			// setting ap my default applications color theme
			colors: {
				"primary-app-them": "#09101D",
			},
		},
	},
	plugins: [],
};
