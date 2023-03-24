import Image from "next/image";
import React from "react";

const ItemSearch = () => {
  return (
    <div type="img_container" className={styles.listItem__imgWrapper}>
      {Math.random() < 0.7 ? (
        <div className={styles.nlogo_wrapper}>
          <Image alt="netflix logo" className={styles.nlogo} src={nlogo} fill />
        </div>
      ) : null}
      <Image
        alt="Picture"
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}`}
        fill
        objectFit="cover"
      />
    </div>
  );
};

export default ItemSearch;
