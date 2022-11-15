import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navigation from "./navigation";
import styles from "../styles/components/layout.module.scss";
import Hero from "./Hero";
import Link from "next/link";
import MainContent from "./MainContent";
import Footer from "./Footer";

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

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>

        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <main className={styles.layout}>
        <Navigation />
        <Hero />

        {children}

        <Footer />
      </main>
    </>
  );
};

export default Layout;
