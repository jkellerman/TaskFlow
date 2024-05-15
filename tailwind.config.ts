/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				enter: "enter 150ms cubic-bezier(0, 0, 0.2, 1)",
				fade: "fade 500ms ease-in-out",
				scale: "scale 150ms ease-in-out",
				"content-show": "content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				border: "hsl(var(--border-color))",
				destructive: "hsl(var(--destructive))",
				text: "hsl(var(--text-color))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					lighter: "hsl(var(--primary-lighter))",
					darker: "hsl(var(--primary-darker))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					lighter: "hsl(var(--secondary-lighter))",
					darker: "hsl(var(--secondary-darker))",
					medium: "hsl(var(--secondary-medium))",
				},
				tertiary: {
					DEFAULT: "hsl(var(--tertiary))",
					lighter: "hsl(var(--tertiary-lighter))",
					darker: "hsl(var(--tertiary-darker))",
					medium: "hsl(var(--tertiary-medium))",
				},
				label: {
					DEFAULT: "hsl(var(--label-default))",
					bg: "hsl(var(--label-default-bg))",
					fg: "hsl(var(--label-default-fg))",
					secondary: "hsl(var(--label-secondary))",
					"secondary-bg": "hsl(var(--label-secondary-bg))",
					"secondary-fg": "hsl(var(--label-secondary-fg))",
					tertiary: "hsl(var(--label-tertiary))",
					"tertiary-bg": "hsl(var(--label-tertiary-bg))",
					"tertiary-fg": "hsl(var(--label-tertiary-fg))",
					quaternary: "hsl(var(--label-quaternary))",
					"quaternary-bg": "hsl(var(--label-quaternary-bg))",
					"quaternary-fg": "hsl(var(--label-quaternary-fg))",
					quinary: "hsl(var(--label-quinary))",
					"quinary-bg": "hsl(var(--label-quinary-bg))",
					"quinary-fg": "hsl(var(--label-quinary-fg))",
					senary: "hsl(var(--label-senary))",
					"senary-bg": "hsl(var(--label-senary-bg))",
					"senary-fg": "hsl(var(--label-senary-fg))",
					septenary: "hsl(var(--label-septenary))",
					"septenary-bg": "hsl(var(--label-septenary-bg))",
					"septenary-fg": "hsl(var(--label-septenary-fg))",
					octonary: "hsl(var(--label-octonary))",
					"octonary-bg": "hsl(var(--label-octonary-bg))",
					"octonary-fg": "hsl(var(--label-octonary-fg))",
				},
			},
			transitionProperty: {
				width: "width",
				"background-position": "background-position",
			},
			keyframes: {
				"content-show": {
					"0%": { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
					"100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
				enter: {
					"0%": { opacity: "0", transform: "translateX(-10px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				scale: {
					"0%": { scale: "0" },
					"100%": { scale: "1" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
