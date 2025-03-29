import { extendTheme } from "@chakra-ui/react";
// Supports weights 100-900
import "@fontsource-variable/exo";
// Supports weights 400 only

const theme = extendTheme({
	fonts: {
		// html: `'Exo Variable', sans-serif`,
		// body: `'Exo Variable', sans-serif`,
	},
	styles: {
		global: {
			body: {
				bg: "#272F37",
			},
		},
	},
});

export default theme;
