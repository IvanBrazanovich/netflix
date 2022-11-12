import Image from "next/image";
import React from "react";
import styles from "../styles/components/hero.module.scss";
import heroImg from "../public/img/hero.jpg";
import descriptionImg from "../public/img/moviedescription.webp";
import Popular from "./Popular";

const Hero = () => {
  return (
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
          <button btn-type="reproducir" className={styles.description__button}>
            <ion-icon name="play"></ion-icon> <p>Reproducir</p>
          </button>
          <button btn-type="information" className={styles.description__button}>
            <ion-icon name="information-circle-outline"></ion-icon>{" "}
            <p> Más información</p>
          </button>
        </div>
      </div>

      <div className={styles.header__reloadInformation}>
        <ion-icon name="refresh-circle-outline"></ion-icon> <p> 16+</p>
      </div>

      <Popular />
    </header>
  );
};

export default Hero;
