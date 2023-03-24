import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/hero.module.scss";
import heroImg from "../public/img/hero.jpg";
import descriptionImg from "../public/img/moviedescription.webp";
import { useRouter } from "next/router";
import RouterChange from "./RouterChange";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../pages/app/slices/moviesSlice";

const Hero = () => {
  const router = useRouter();
  const urlType = useSelector((state) => state.movies.urlType);
  const search = useSelector((state) => state.movies.search);
  const [urlCurrent, setUrlCurrent] = useState("/");
  const dispatch = useDispatch();

  //Update redux router state
  useEffect(() => {
    setUrlCurrent(urlType);
  }, [urlType]);

  //Update peliculas/series menu
  useEffect(() => {
    let url;
    if (router.pathname === "/peliculas") {
      url = "/peliculas";
    }

    if (router.pathname === "/series") {
      url = "/series";
    }
    if (router.pathname === "/") {
      url = "/";
    }
    dispatch(setUrl(url));
  }, [dispatch, router]);

  if (search) return null;
  return (
    <div className={styles.header__container}>
      <header className={styles.header}>
        <div className={styles.video__wrapper}>
          <Image
            alt="heroImg"
            className={styles.hero__img}
            src={heroImg}
            fill
            objectFit="cover"
          />
        </div>

        {urlCurrent === "/peliculas" ? <RouterChange text="Películas" /> : null}

        {urlCurrent === "/series" ? <RouterChange text="Series" /> : null}

        <div className={styles.header_description}>
          <div className={styles.description__imgWrapper}>
            <Image
              alt="description Image"
              src={descriptionImg}
              fill
              objectFit="contain"
            />
          </div>

          <p className={styles.description__text}>
            Atrapado entre dos clanes en guerra, el hijo de un famoso brujo
            responsable de una masacre mortal intenta encontrar su lugar en el
            mundo… y sus poderes.
          </p>

          <div className={styles.description__buttonsWrapper}>
            <button
              btn-type="reproducir"
              className={styles.description__button}
            >
              <ion-icon name="play"></ion-icon> <p>Reproducir</p>
            </button>
            <button
              btn-type="information"
              className={styles.description__button}
            >
              <ion-icon name="information-circle-outline"></ion-icon>{" "}
              <p> Más información</p>
            </button>
          </div>
        </div>

        <div className={styles.header__reloadInformation}>
          <ion-icon name="refresh-circle-outline"></ion-icon> <p> 16+</p>
        </div>
      </header>
    </div>
  );
};

export default Hero;
