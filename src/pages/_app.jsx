import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
