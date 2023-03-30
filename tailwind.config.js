/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			primary: "rgba(0, 13, 130, 1)",
			white: "#ffffff",
			background: "rgba(32, 32, 32, 1)",
		},
		extend: {
			spacing: {
				small: "2%",
				desktop: "8%",
			},
		},
	},
	plugins: [],
};
