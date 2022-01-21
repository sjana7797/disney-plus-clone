import Head from "next/head";
import { ReactElement } from "react";
import Header from "../Global/Header/Header";
import { SessionProvider } from "next-auth/react";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
