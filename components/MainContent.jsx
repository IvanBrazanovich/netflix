import React from "react";
import styles from "../styles/components/maincontent.module.scss";
import ListItem from "./ListItem";
import Popular from "./Popular";
import PopularItem from "./PopularItem";

const MainContent = () => {
  const times = [
    "popular",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Science Fiction",
    "Drama",
    "popular",
    "Thriller",
    "Western",
    "History",
    "Fantasy",
    "Romance",
    "Family",
  ];

  return (
    <main className={styles.mainContent}>
      {times.map((value, index) => {
        if (value !== "popular") {
          return <ListItem key={index} type={value} />;
        } else {
          return <Popular key={index} />;
        }
      })}
    </main>
  );
};

export default MainContent;
