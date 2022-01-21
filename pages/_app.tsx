import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Global/Header/Header";

// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        {/* <SessionProvider session={session}> */}
        <Header />
        <Component {...pageProps} />
        {/* </SessionProvider> */}
      </>
    </Layout>
  );
}

export default MyApp;
