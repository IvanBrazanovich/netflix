import Head from "next/head";
import React from "react";
import Navigation from "./navigation";
import styles from "../styles/components/layout.module.scss";
import Hero from "./Hero";
import Link from "next/link";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          defer
        ></script>

        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          defer
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
