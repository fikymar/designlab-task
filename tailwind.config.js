/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgba(0, 13, 130, 1)',
				white: '#ffffff',
				background: 'rgba(32, 32, 32, 1)',
			},
			spacing: {
				small: '5%',
				desktop: '8vw',
			},
			transitionProperty: {
				dimensions: 'width , height ',
			},
			dropShadow: {
				custom: '0px 6px 25px 4px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
}
