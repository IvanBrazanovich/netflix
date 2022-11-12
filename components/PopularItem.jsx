import Image from "next/image";
import React from "react";
import styles from "../styles/components/popular.module.scss";
import ranks from "../public/img/ranks.js";
import nlogo from "../public/img/n_logo.svg";

const PopularItem = ({ movie, rank }) => {
  const {
    i: { imageUrl },
  } = movie;
  // console.log(i);{ranks[`rank${rank + 1}`]}
  return (
    <div className={styles.popularItem}>
      <div type="svg_container"> {ranks[`rank${rank + 1}`]} </div>
      <div type="img_container" className={styles.popularItem__imgWrapper}>
        {Math.random() < 0.7 ? (
          <div className={styles.nlogo_wrapper}>
            <Image className={styles.nlogo} src={nlogo} fill />
          </div>
        ) : null}

        <Image alt="Picture" src={imageUrl} fill objectFit="cover" />
      </div>
    </div>
  );
};

export default PopularItem;
