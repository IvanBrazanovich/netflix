import React, { useEffect, useState } from "react";
import dataBase from "../pages/api/movie.json";
import PopularItem from "./PopularItem";
import styles from "../styles/components/popular.module.scss";

const Popular = () => {
  const [result, setResults] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [type, setType] = useState("");
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    try {
      let url;
      if (Math.random() < 0.5) {
        url =
          "https://api.themoviedb.org/3/tv/popular?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&page=1";
        setType("tv");
      } else {
        setType("movie");
        url =
          "https://api.themoviedb.org/3/movie/popular?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&page=1";
      }

      const fetchMovies = async () => {
        const response = await fetch(url);
        const res = await response.json();
        setResults({ ...res, results: [...res.results.slice(0, 10)] });
      };

      fetchMovies();
    } catch (err) {}
  }, []);

  useEffect(() => {
    setTotalSlides(Math.ceil(result.results?.length / 5));
  }, [result]);

  const nextSlide = () => {
    console.log(totalSlides, currSlide);
    if (currSlide + 1 === totalSlides) {
      setCurrSlide(0);
    } else {
      {
        setCurrSlide((state) => state + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currSlide === 0) {
      setCurrSlide(totalSlides);
    }
    setCurrSlide((state) => state - 1);
  };

  return (
    <section className={styles.popular}>
      <p className={styles.popular__heading}>
        {type === "tv"
          ? "Las 10 series más populares en Argentina"
          : "Las 10 películas más populares en Argentina"}
      </p>

      <div className={styles.container}>
        <button
          onClick={prevSlide}
          type="handle__left"
          className={styles.slider__handle}
        >
          <div className={styles.handleWrapper}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </button>
        {Object.keys(result)?.length !== 0 ? (
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${currSlide * 100}%)`,
            }}
          >
            {result.results?.map((movie, rank) => {
              return <PopularItem rank={rank} key={rank} movie={movie} />;
            })}
          </div>
        ) : null}
        <button
          onClick={nextSlide}
          type="handle__right"
          className={styles.slider__handle}
        >
          <div className={styles.handleWrapper}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Popular;
