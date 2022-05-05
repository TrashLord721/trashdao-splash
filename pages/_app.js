import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { InjectedProviderFC } from "../components/InjectedProviderContext";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "960px",
  md: "960px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <InjectedProviderFC>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Toaster />
      </ChakraProvider>
    </InjectedProviderFC>
  );
}

export default MyApp;
