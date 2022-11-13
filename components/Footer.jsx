import React from "react";
import styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_socialLinks}>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
      </div>

      <div className={styles.footer__list}>
        <li>
          <a href="#">Audio descriptivo</a>
        </li>
        <li>
          <a href="#">Relaciones con inversionistas</a>
        </li>
        <li>
          <a href="#">Avisos legales</a>
        </li>
        <li>
          <a href="#">Centro de ayuda</a>
        </li>
        <li>
          <a href="#">Empleo</a>
        </li>
        <li>
          <a href="#">Preferencias de Cookies</a>
        </li>
        <li>
          <a href="#">Tarjetas de regalo</a>
        </li>
        <li>
          <a href="#">Términos de uso</a>
        </li>
        <li>
          <a href="#">Información corporativa</a>
        </li>
        <li>
          <a href="#">Prensa</a>
        </li>
        <li>
          <a href="#">Privacidad</a>
        </li>
        <li>
          <a href="#">Contáctanos</a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
