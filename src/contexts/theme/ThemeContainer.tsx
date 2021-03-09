import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { config as theme } from '../../styles/theme';

export default function ThemeContainer({ children }) {
	return (
	<ChakraProvider theme={theme}>
		<ColorModeProvider
			options={{ initialColorMode: 'dark', useSystemColorMode: false }}
			value="dark"
		>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeProvider>
	</ChakraProvider>
	);
};
