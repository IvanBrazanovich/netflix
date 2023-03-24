import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../pages/app/slices/moviesSlice";
import styles from "../styles/components/maincontent.module.scss";
import ListItem from "./ListItem";
import Popular from "./Popular";
import SearchBy from "./SearchBy";

const MainContent = () => {
  const [searchContent, setSearchContent] = useState([]);

  const times = [
    "popular",
    "Adventure",
    "Comedy",
    "Crime",
    "Science Fiction",
    "Drama",
    "popular",
    "Thriller",
    "Western",
    "History",
    "Fantasy",
    "Romance",
    "Family",
  ];

  const search = useSelector((state) => state.movies.search);

  const route = useRouter();
  const dispatch = useDispatch();

  //Update url redux
  useEffect(() => {
    let url;
    if (route.pathname === "/peliculas") {
      url = "/peliculas";
    }

    if (route.pathname === "/series") {
      url = "/series";
    }

    dispatch(setUrl(url));
  }, [route, dispatch]);

  //Fetch Movies
  useEffect(() => {
    if (!search) return;
    try {
      const fetchMovies = async () => {
        const url1 = ` https://api.themoviedb.org/3/search/multi?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&query=${search}&page=1&include_adult=false`;
        const url2 = `https://api.themoviedb.org/3/search/multi?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&query=${search}&page=2&include_adult=false`;
        const url3 = `https://api.themoviedb.org/3/search/multi?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&query=${search}&page=3&include_adult=false`;
        const url4 = `https://api.themoviedb.org/3/search/multi?api_key=390c68bbed9ef9bfdb14c50c1f4ceccf&language=en-US&query=${search}&page=4&include_adult=false`;
        const [response1, response2, response3, response4] = await Promise.all([
          fetch(url1),
          fetch(url2),
          fetch(url3),
          fetch(url4),
        ]);

        const [res1, res2, res3, res4] = await Promise.all([
          response1.json(),
          response2.json(),
          response3.json(),
          response4.json(),
        ]);
        setSearchContent([
          ...res1.results,
          ...res2.results,
          ...res3.results,
          ...res4.results,
        ]);
      };
      fetchMovies();
    } catch (err) {
      console.log(err);
    }
  }, [search]);

  return (
    <main className={styles.mainContent}>
      {!search &&
        times.map((value, index) => {
          if (value !== "popular") {
            return (
              <ListItem key={index} type={value} urlType={route.pathname} />
            );
          } else {
            return <Popular key={index} />;
          }
        })}

      {search ? <SearchBy listado={searchContent} search={search} /> : null}
    </main>
  );
};

export default MainContent;
