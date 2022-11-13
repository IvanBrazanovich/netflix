import React from "react";
import styles from "../styles/components/maincontent.module.scss";
import ListItem from "./ListItem";

const MainContent = () => {
  const times = Array.from(new Array(10), (item, index) => index);

  return (
    <main className={styles.mainContent}>
      {times.map((value) => {
        return <ListItem number={value} key={value} />;
      })}
    </main>
  );
};

export default MainContent;
