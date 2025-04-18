import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'russo-one': ['var(--font-russo-one)'],
				'open-sans': ['var(--font-open-sans)'],
			},
		},
	},
	plugins: [],
}

export default config
