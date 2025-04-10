// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    // If you have "Fresh Start 2P", you can optionally override it here
    // body: `'Fresh Start 2P', cursive`, 
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
        fontFamily: "Poppins, sans-serif",
      },
    },
  },
});

export default theme;
