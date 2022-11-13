import React, { useEffect, useState } from "react";
import dataBase from "../pages/api/movie.json";
import PopularItem from "./PopularItem";
import styles from "../styles/components/popular.module.scss";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf"
      );
      const res = await response.json();

      setMovies(res.results);
    };

    fetchMovies();
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
