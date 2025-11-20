/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Main dark background
				primary: "#1a1a1a",
				// Off-white for main text
				secondary: "#e0e0e0",
				// Red accents
				accent: "#b22222",
				// Lighter gray for subtle details/borders
				lightGray: "#4a4a4a",
				// A very dark gray, almost black for depth if needed
				darkGray: "#0d0d0d",
			},
			fontFamily: {
				// Reference the variables defined in layout.js
				sans: ["var(--font-sans)", "sans-serif"], // Open Sans
				display: ["var(--font-display)", "sans-serif"], // Anton
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
