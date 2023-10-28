/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./container/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./screens/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				opensans: ["Open Sans", "sans-serif"],
			},
			colors: {
				primary: "#00B14F",
				secondary: "#002e27",
				dark: "#001e20",
			},
		},
	},
	plugins: [],
};
