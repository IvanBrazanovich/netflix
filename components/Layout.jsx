import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navigation from "./navigation";
import styles from "../styles/components/layout.module.scss";
import Hero from "./Hero";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.layout}>
        <Navigation />
        <Hero />
        {children}

        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />

        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </main>
    </>
  );
};

export default Layout;
