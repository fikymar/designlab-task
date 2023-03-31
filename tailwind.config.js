/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		colors: {
			primary: 'rgba(0, 13, 130, 1)',
			white: '#ffffff',
			background: 'rgba(32, 32, 32, 1)',
		},
		extend: {
			spacing: {
				small: '5%',
				desktop: '8vw',
			},
			transitionProperty: {
				dimensions: 'width , height ',
			},
		},
	},
	plugins: [],
}
