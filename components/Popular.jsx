import React, { useEffect, useState } from "react";
import dataBase from "../pages/api/movie.json";
import PopularItem from "./PopularItem";
import styles from "../styles/components/popular.module.scss";

const Popular = () => {
  const [result, setResults] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf"
      );
      const res = await response.json();
      console.log(res);
      setResults({ ...res, results: [...res.results.slice(0, 10)] });
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    setTotalSlides(Math.ceil(result.results?.length / 5));
  }, [result]);

  const nextSlide = () => {
    console.log(totalSlides, currSlide);
    if (currSlide + 1 === totalSlides) {
      setCurrSlide(0);
    } else {
      setCurrSlide((state) => state + 1);
    }
  };

  const prevSlide = () => {
    if (totalSlides === currSlide - 1) {
      console.log(result.items);
    }
    setCurrSlide((state) => state - 1);
  };

  return (
    <section className={styles.popular}>
      <p className={styles.popular__heading}>
        {/* {result?.description
          ? result?.description
          : "Las 10 películas más populares en Argentina"} */}
      </p>

      {/* <div className={styles.popularWrapper}>
        {result.results?.map((movie, rank) => {
          return <PopularItem rank={rank} key={movie.id} movie={movie} />;
        })}
      </div> */}

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
