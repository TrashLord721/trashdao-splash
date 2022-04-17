import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { InjectedProviderFC } from "../components/InjectedProviderContext";

function MyApp({ Component, pageProps }) {
  return (
    <InjectedProviderFC>
      <ChakraProvider>
        <Component {...pageProps} />
        <Toaster />
      </ChakraProvider>
    </InjectedProviderFC>
  );
}

export default MyApp;
