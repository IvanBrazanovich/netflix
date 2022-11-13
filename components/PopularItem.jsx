import Image from "next/image";
import React from "react";
import styles from "../styles/components/popular.module.scss";
import ranks from "../public/img/ranks.js";
import nlogo from "../public/img/n_logo.svg";

const PopularItem = ({ movie, rank }) => {
  const { poster_path } = movie;
  return (
    <div className={styles.popularItem}>
      <div type="svg_container"> {ranks[`rank${rank + 1}`]} </div>
      <div type="img_container" className={styles.popularItem__imgWrapper}>
        {Math.random() < 0.7 ? (
          <div className={styles.nlogo_wrapper}>
            <Image
              alt="NETFLIX LOGO"
              className={styles.nlogo}
              src={nlogo}
              fill
            />
          </div>
        ) : null}

        <Image
          alt="Picture"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default PopularItem;
