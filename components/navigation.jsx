import React from "react";
import styles from "../styles/components/navigation.module.scss";
import logo from "../public/img/netflix_logo.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__main}>
          <div className={styles.main__image}>
            <Image
              sizes="(max-width: 768px) 90px,
               (max-width: 1200px) 90px,
               90px"
              fill
              objectFit="contain"
              src={logo}
              alt="Netflix logo"
            />
          </div>
          <ul className={styles.main__list}>
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Novedades populares</li>
            <li>Mi lista</li>
            <li>Explora por idiomas</li>
          </ul>
        </div>
        <div className={styles.nav__features}>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
