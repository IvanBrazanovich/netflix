import React, { useEffect, useState } from "react";
import dataBase from "../pages/api/movie.json";
import PopularItem from "./PopularItem";
import styles from "../styles/components/popular.module.scss";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(dataBase.d);
  }, []);
  return (
    <section className={styles.popular}>
      <p className={styles.popular__heading}>
        Las 10 películas más populares en Argentina hoy{" "}
      </p>

      <div className={styles.popularWrapper}>
        {movies?.map((movie, rank) => {
          return <PopularItem rank={rank} key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default Popular;
