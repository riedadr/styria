/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#5865F2",
				secondary: "#0ea5e9",
				discord: "#5865F2",
				success: "#57F287",
				warning: "#FEE75C",
				error: "#ED4245",
			},
			backgroundImage: {
				controller: "url('/images/controller.webp')",
				minecraft: "url('/images/games/minecraft.webp')",
			},
			fontFamily: {
				rajdhani: ["var(--font-rajdhani)"],
			},
			backgroundColor: {
				dark: "#1e293b",
				light: "#f1f5f9",
				"dark-base": "#0f172a",
				"light-base": "#e2e8f0"
			},
			textColor: {
				light: "#f8fafc",
				dark: "#020617",
			},
		},
	},
	plugins: [],
};
