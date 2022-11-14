import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/hero.module.scss";
import heroImg from "../public/img/hero.jpg";
import descriptionImg from "../public/img/moviedescription.webp";
import { useRouter } from "next/router";
import RouterChange from "./RouterChange";

const Hero = () => {
  const [mode, setMode] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/peliculas") {
      setMode("peliculas");
    }

    if (router.pathname === "/series") {
      setMode("series");
    }
  }, [router]);
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

        {mode === "peliculas" ? <RouterChange text="Películas" /> : null}

        {mode === "series" ? <RouterChange text="Series" /> : null}

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
