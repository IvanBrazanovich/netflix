import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/lists.module.scss";
import Item from "./Item";

const ListItem = ({ type }) => {
  const [result, setResult] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [genres, setGenres] = useState([]);
  const [currentGenreId, setCurrentGenreId] = useState("");

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US"
        );
        const res = await response.json();
        setGenres(res.genres);
      };

      fetchMovies();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (genres.length === 0) return;
    const genre = genres.filter((item) => item.name === type);
    setCurrentGenreId(genre[0].id);
  }, [genres]);

  useEffect(() => {
    console.log(currentGenreId);
    if (!currentGenreId) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenreId}&watch_region=AR&with_watch_monetization_types=flatrate`
        );
        console.log(response);
        if (response.status === 404) {
          fetchMovies();
          throw new Error("That was bad");
        }
        const res = await response.json();
        setResult(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [currentGenreId]);

  useEffect(() => {
    setTotalSlides(Math.ceil(result?.length / 5));
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

  if (result.length === 0) return;
  return (
    <section className={styles.list}>
      <p className={styles.list__heading}>{type}</p>

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
        {result?.length !== 0 ? (
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${currSlide * 100}%)`,
            }}
          >
            {result?.map((movie, rank) => {
              return <Item rank={rank} key={rank} movie={movie} />;
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

export default ListItem;
