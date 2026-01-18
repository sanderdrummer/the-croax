/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components.tsx"],
	theme: {
		extend: {
			colors: {
				// Main dark background
				primary: "#1a1a1a",
				// Off-white for main text
				secondary: "#e0e0e0",
				// Red accents
				accent: "#f536ab",
				// Lighter gray for subtle details/borders
				lightGray: "#4a4a4a",
				// A very dark gray, almost black for depth if needed
				darkGray: "#0d0d0d",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
				display: ["var(--font-display)", "sans-serif"],
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("@tailwindcss/typography"),
	],
};
