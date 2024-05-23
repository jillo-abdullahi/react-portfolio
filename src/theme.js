import { extendTheme } from '@chakra-ui/react'
// Supports weights 100-900
import '@fontsource-variable/exo';

const theme = extendTheme({
  fonts: {
    html: `'Exo Variable', sans-serif`,
    body: `'Exo Variable', sans-serif`,
  },
  
})

export default theme