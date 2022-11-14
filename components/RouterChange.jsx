import React, { useEffect, useState } from "react";
import styles from "../styles/components/hero.module.scss";

const RouterChange = ({ text }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = (e) => {
    const onmenu = e.target.closest("#routerChange__menu");

    if (!onmenu) {
      setMenu(!menu);
    }
  };
  return (
    <div onClick={(e) => showMenu(e)} className={styles.routerChange}>
      <h2>{text}</h2>
      <div
        className={styles.routerChange__button}
        role="button"
        type="text"
        placeholder="Géneros"
      >
        <p>Géneros</p>
        <ion-icon name="caret-down-outline"></ion-icon>
        <div
          id="routerChange__menu"
          className={
            menu
              ? `${styles.routerChange__menu} ${styles.active}`
              : styles.routerChange__menu
          }
        >
          <ul>
            <li>Acción</li>
            <li>Deportes</li>
            <li>Música y musicales</li>
            <li>Anime</li>
            <li>Documentales</li>
            <li>Para ver en familia</li>
            <li>Cine de intriga</li>
            <li>Dramas</li>
            <li>Películas en español</li>
            <li>Clásicas</li>
            <li>Fantasía</li>
            <li>Policiales</li>
            <li>Comedias</li>
            <li>Fe y esperitualidad</li>
            <li>Romances</li>
            <li>Cortos</li>
            <li>Independientes</li>
            <li>Sci-fi</li>
            <li>De Argentina</li>
            <li>Internacionales</li>
            <li>Terror</li>
            <li>De Hollywood</li>
            <li>Los favoritos de la crítica</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RouterChange;
