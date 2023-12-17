const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				neutral: {
					800: '#2f2f2f',
					900: '#252525',
				},
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
