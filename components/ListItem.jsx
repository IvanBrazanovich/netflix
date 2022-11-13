import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/lists.module.scss";
import Item from "./Item";

const ListItem = ({ number }) => {
  const [result, setResult] = useState({});
  const [currSlide, setCurrSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/list/${Math.ceil(
            Math.random() * 7
          )}?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US`
        );
        if (response.status === 404) {
          fetchMovies();
          throw new Error("That was bad");
        }
        const res = await response.json();

        if (res.description === "") return;
        setResult(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    setTotalSlides(Math.ceil(result.items?.length / 5));
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
    if (totalSlides === currSlide - 1) {
      console.log(result.items);
    }
    setCurrSlide((state) => state - 1);
  };

  console.log(result);

  if (Object.keys(result).length === 0) return;
  if (result?.items.length === 0) return;
  return (
    <section className={styles.list}>
      <p className={styles.list__heading}>
        {result.description
          ? result.description
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
            {result.items?.map((movie, rank) => {
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
