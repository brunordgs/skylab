import theme, { Theme } from '@chakra-ui/theme';

export const config: Theme = {
	...theme,
	fonts: {
		heading: 'Roboto, system-ui, sans-serif',
		body: 'Roboto, system-ui, sans-serif',
		mono: 'Menlo, Fira Code, monospace',
	},
	fontWeights: {
		...theme.fontWeights,
		normal: 400,
		medium: 500,
		bold: 700,
	},
	radii: {
		...theme.radii,
		sm: '5px',
		md: '8px',
	},
	colors: {
		...theme.colors,
		purple: {
			...theme.colors.purple,
			'500': '#8257e5',
		},
		gray: {
			...theme.colors.gray,
			'300': '#e1e1e6',
			'600': '#29292e',
			'700': '#202024',
			'800': '#121214',
		},
	},
};
