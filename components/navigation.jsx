import React, { useEffect, useState } from "react";
import styles from "../styles/components/navigation.module.scss";
import logo from "../public/img/netflix_logo.svg";
import Image from "next/image";
import Link from "next/link";
import useDebounceSearch from "./useDebounceSearch";
import { useDispatch } from "react-redux";
import { setSearch } from "../context/app/slices/moviesSlice";

const Navigation = () => {
  const [navShow, setNavShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchState, setSearchState] = useState("");

  //Debounce for search
  const searchFetch = useDebounceSearch(searchState, 500);
  const dispatch = useDispatch();

  //Remove search from hero if clicked in other place
  useEffect(() => {
    const removeActive = (e) => {
      if (!e.target.closest("#features__searchWrapper")) {
        setShowSearch(false);
      }
    };
    window.addEventListener("click", removeActive);

    return () => window.removeEventListener("onclick", removeActive);
  }, []);

  //Change background on scroll navbar
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY !== 0) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };

  // //Fetch Movies
  // useEffect(() => {
  //   try {
  //     const fetchMovies = async () => {
  //       console.log("entra aquí");

  //       const response = await fetch(
  //         `
  //         https://api.themoviedb.org/3/search/multi?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&query=${searchFetch}&page=1&include_adult=false`
  //       );
  //       const res = await response.json();
  //       console.log(res);
  //     };
  //     fetchMovies();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [searchFetch]);

  useEffect(() => {
    dispatch(setSearch(searchFetch));
  }, [searchFetch, dispatch]);

  return (
    <>
      <nav
        className={navShow ? `${styles.nav} ${styles.active}` : `${styles.nav}`}
      >
        <div className={styles.nav__main}>
          <div className={styles.main__image}>
            <Image
              sizes="(max-width: 768px) 90px,
               (max-width: 1200px) 90px,
               90px"
              fill
              style={{ objectFit: "contain" }}
              src={logo}
              alt="Netflix logo"
            />
          </div>
          <ul className={styles.main__list}>
            <Link className={styles.links} href="/">
              Inicio
            </Link>
            <Link className={styles.links} href="/series">
              Series
            </Link>
            <Link className={styles.links} href="/peliculas">
              Películas
            </Link>
            <Link className={styles.links} href="/">
              Novedades populares
            </Link>
            <Link className={styles.links} href="/">
              Mi Lista
            </Link>
            <Link className={styles.links} href="/">
              Explora por idiomas
            </Link>
          </ul>
        </div>
        <div className={styles.nav__features}>
          <div
            onClick={() => setShowSearch(true)}
            id="features__searchWrapper"
            className={
              !showSearch
                ? `${styles.features__searchWrapper}`
                : `${styles.features__searchWrapper} ${styles.features__searchWrapper_active}`
            }
          >
            <ion-icon name="search-outline"></ion-icon>
            <input
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="Títulos, personas, géneros"
              type="text"
            />
          </div>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
