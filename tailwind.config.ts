import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class", "[data-theme='dark']"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			screens: {
				xs: '300px'
			},
		}
	},
	plugins: [],
};

export default config;
