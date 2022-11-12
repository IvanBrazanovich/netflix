import React from "react";
import styles from "../styles/components/maincontent.module.scss";
import ListItem from "./ListItem";

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <ListItem />
    </main>
  );
};

export default MainContent;
