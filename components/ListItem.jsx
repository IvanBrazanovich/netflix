import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/lists.module.scss";
import dataBase from "../pages/api/movie.json";
import Item from "./Item";

const ListItem = ({}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(dataBase.d);
  }, []);
  return (
    <section className={styles.list}>
      <p className={styles.list__heading}>
        Las 10 películas más populares en Argentina hoy{" "}
      </p>

      <div className={styles.listWrapper}>
        {movies?.map((movie, rank) => {
          return <Item rank={rank} key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default ListItem;
