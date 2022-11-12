import React from "react";
import styles from "../styles/components/lists.module.scss";
import nlogo from "../public/img/n_logo.svg";
import Image from "next/image";

const Item = ({ movie }) => {
  const {
    i: { imageUrl },
  } = movie;

  console.log(movie);
  // console.log(i);{ranks[`rank${rank + 1}`]}
  return (
    <div className={styles.listItem}>
      <div type="img_container" className={styles.listItem__imgWrapper}>
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
export default Item;
