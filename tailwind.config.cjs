const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
			},
			fontFamily: {
				sans: ["'Space Grotesk Variable'", ...fontFamily.sans],
			},
		},
		variants: {
			extend: {
				opacity: ['disabled'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
