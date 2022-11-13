import React from "react";
import styles from "../styles/components/lists.module.scss";
import nlogo from "../public/img/n_logo.svg";
import Image from "next/image";

const Item = ({ movie }) => {
  const { backdrop_path } = movie;

  return (
    <div className={styles.listItem}>
      <div type="img_container" className={styles.listItem__imgWrapper}>
        {Math.random() < 0.7 ? (
          <div className={styles.nlogo_wrapper}>
            <Image
              alt="netflix logo"
              className={styles.nlogo}
              src={nlogo}
              fill
            />
          </div>
        ) : null}
        <Image
          alt="Picture"
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          fill
          objectFit="cover"
        />{" "}
      </div>
    </div>
  );
};
export default Item;
