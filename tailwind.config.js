/** @type {import('tailwindcss').Config} */
export const content = [
	"./src/app/**/*.{js,ts,jsx,tsx}",
	"./src/pages/**/*.{js,ts,jsx,tsx}",
	"./src/sections/**/*.{js,ts,jsx,tsx}",
	"./src/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
	extend: {
		fontFamily: {
			primary: "var(--font-primary)",
		},
		animation: {
			"ping-large": "ping-large 1s ease-in-out infinite",
			"move-left": "move-left 1s linear infinite",
		},
		keyframes: {
			"ping-large": {
				"75%,100%": {
					transform: "scale(3)",
					opacity: "0",
				},
			},
			"move-left": {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-50%)" },
			},
		},
	},
};
export const plugins = [];
