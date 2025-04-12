import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class", "[data-theme='dark']"],

	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		container: {
			center: true,
			screens: {
				"2xl": "1440px",
			},
		},

		extend: {
			screens: {
				xs: "300px",
			},

			// Optional: Sample use of CSS variables and oklch (Tailwind v4 style)
			colors: {
				background: "oklch(var(--background) / <alpha-value>)",
				foreground: "oklch(var(--foreground) / <alpha-value>)",
				primary: "oklch(var(--primary) / <alpha-value>)",
				accent: "oklch(var(--accent) / <alpha-value>)",
			},

			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
				mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
			},
		},
	},

	plugins: [],
};

export default config;
