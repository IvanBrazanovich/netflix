import React from "react";
import styles from "../styles/components/searchby.module.scss";
import Item from "./Item";
import ItemSearch from "./ItemSearch";

const SearchBy = ({ search, listado }) => {
  return (
    <section className={styles.searchby}>
      <h4 className={styles.searchString}>{search}</h4>

      <div className={styles.lista}>
        {listado?.map((movie) => {
          return <Item key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default SearchBy;
