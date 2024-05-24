import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	cli: {
		entry: {
			patterns: [
				'./{components,layouts,pages}/**/*.templ',
				'./static/**/*.{js,css,html}',
				'!./static/uno.css',
			],
			outFile: './static/uno.css',
		},
	},
	presets: [
		presetIcons(),
		presetTypography(),
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: {
					name: 'Inter',
					provider: 'none'
				},
				cal: {
					name: 'Cal Sans',
					provider: 'none',
				},
				mono: {
					name: 'Fira Code',
					provider: 'none',
				},
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
});
