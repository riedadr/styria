/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#5865F2",
				discord: "#5865F2",
				success: "#57F287",
				warning: "#FEE75C",
				error: "#ED4245",
			},
			backgroundImage: {
				controller: "url('/images/controller.webp')",
			},
			fontFamily: {
				rajdhani: ["var(--font-rajdhani)"],
			},
		},
	},
	plugins: [],
};
