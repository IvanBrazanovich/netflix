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
      {movies?.map((movie) => {
        return <PopularItem key={movie.id} movie={movie} />;
      })}
    </section>
  );
};

export default Popular;
