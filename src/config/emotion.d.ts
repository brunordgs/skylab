import '@emotion/styled';
import { config as theme } from '../styles/theme';

type ThemeType = typeof theme;

declare module '@emotion/styled' {
	export interface Theme extends ThemeType {}
}
