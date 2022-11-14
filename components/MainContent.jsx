import React from "react";
import styles from "../styles/components/maincontent.module.scss";
import ListItem from "./ListItem";
import Popular from "./Popular";

const MainContent = () => {
  const times = Array.from(new Array(10), (item, index) => index);

  return (
    <main className={styles.mainContent}>
      {times.map((value) => {
        if (Math.random() < 0.8) {
          return <ListItem number={value} key={value} />;
        } else {
          return <Popular key={value} />;
        }
      })}
    </main>
  );
};

export default MainContent;
