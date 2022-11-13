import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/components/lists.module.scss";
import Item from "./Item";

const ListItem = ({ number }) => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/list/${number}?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US`
        );
        if (response.status === 404) throw new Error("That was bad");
        const res = await response.json();
        console.log(res);
        setResult(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);
  return (
    <section className={styles.list}>
      <p className={styles.list__heading}>{result.description}</p>
      {Object.keys(result)?.length !== 0 ? (
        <div
          className={styles.listWrapper}
          style={{
            transform: "translateX(0%)",
          }}
        >
          {result.items?.map((movie, rank) => {
            return <Item rank={rank} key={movie.id} movie={movie} />;
          })}
        </div>
      ) : null}
    </section>
  );
};

export default ListItem;
