import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navigation from "./navigation";
import styles from "../styles/components/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />

        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </Head>
      <main className={styles.layout}>
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default Layout;
