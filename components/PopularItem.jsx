import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/components/popular.module.scss";
import ranks from "../public/img/ranks.js";
import nlogo from "../public/img/n_logo.svg";
import useDebounce from "./useDebounce";
import stylesPortal from "../styles/components/lists.module.scss";
import CardPortal from "./CardPortal";

const PopularItem = ({ movie, rank }) => {
  const [portal, setPortal] = useState(false);
  const [positionArray, setPositionArray] = useState({});
  const [activePortal, setActivePortal] = useState(false);
  const cardRef = useRef();
  const { backdrop_path, poster_path } = movie;

  const changePortal = () => {
    const rect = cardRef.current.getBoundingClientRect();
    const position = {
      x: rect.x + window.scrollX,
      y: rect.y + window.scrollY,
      width: rect.width,
      height: rect.height,
    };
    setPositionArray(position);
    setPortal(true);
  };

  const showPortal = useDebounce(portal, 750);

  useEffect(() => {
    setActivePortal(showPortal);
  }, [showPortal]);

  return (
    <div
      onMouseEnter={() => {
        changePortal();
        console.log("hola");
      }}
      onMouseLeave={() => {
        setPortal(false);
      }}
      ref={cardRef}
      className={styles.popularItem}
    >
      <div type="svg_container"> {ranks[`rank${rank + 1}`]} </div>
      <div type="img_container" className={styles.popularItem__imgWrapper}>
        {Math.random() < 0.7 ? (
          <div className={styles.nlogo_wrapper}>
            <Image
              alt="NETFLIX LOGO"
              className={styles.nlogo}
              src={nlogo}
              fill
            />
          </div>
        ) : null}

        <Image
          alt="Picture"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {activePortal ? (
        <CardPortal selector="#cardportal">
          <div
            className={stylesPortal.cardPortal}
            style={{
              top: positionArray.y,
              left: positionArray.x,
              minWidth: `${positionArray.width}px`,
              minHeight: `${positionArray.height}px`,
              zIndex: 10,
            }}
          >
            <div className={stylesPortal.listItemPortal}>
              <div
                type="img_container"
                className={stylesPortal.listItemPortal__imgWrapper}
              >
                {Math.random() < 0.7 ? (
                  <div className={stylesPortal.nlogo_wrapper}>
                    <Image
                      alt="netflix logo"
                      className={stylesPortal.nlogo}
                      src={nlogo}
                      fill
                    />
                  </div>
                ) : null}
                <Image
                  alt="Picture"
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={stylesPortal.cardInfo}>
                <div className={stylesPortal.features}>
                  <div className={stylesPortal.left}>
                    <ion-icon name="caret-forward-circle"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>{" "}
                  </div>
                  <div className={stylesPortal.right}>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="heart-dislike-outline"></ion-icon>
                    <ion-icon name="albums-outline"></ion-icon>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </div>
                </div>

                <div className={stylesPortal.inlineData}>
                  <span className={stylesPortal.age}>16+</span>
                  <span className={stylesPortal.volumenes}>
                    {Math.ceil(Math.random() * 10)} Volúmenes
                  </span>
                  <span className={stylesPortal.quality}>HD</span>
                </div>

                <div className={stylesPortal.tags}>
                  <ul>
                    <li>De investigación</li>
                    <li>Crímenes reales</li>
                    <li>Ovnis</li>
                  </ul>
                </div>
              </div>

              <div className={stylesPortal.moreInfo}>
                <div className="wrapper">
                  <ion-icon name="information-circle-outline"></ion-icon>{" "}
                  <p>Más información</p>
                </div>
                <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
              </div>
            </div>
          </div>
        </CardPortal>
      ) : null}
    </div>
  );
};

export default PopularItem;
