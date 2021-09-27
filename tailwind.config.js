module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif']
		},
		extend: {
			animation: {
				'spin-slow': 'spin 6s linear infinite'
			}
		}
	},
	variants: {
		extend: {
			translate: ['hover', 'group-hover']
		}
	},
	plugins: []
}
