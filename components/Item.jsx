import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/components/lists.module.scss";
import nlogo from "../public/img/n_logo.svg";
import Image from "next/image";
import CardPortal from "./CardPortal";
import useDebounce from "./useDebounce";

const Item = ({ movie }) => {
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
    <>
      <div
        ref={cardRef}
        className={styles.listItem}
        onMouseEnter={changePortal}
        onMouseLeave={() => {
          setPortal(false);
        }}
      >
        <div type="img_container" className={styles.listItem__imgWrapper}>
          {Math.random() < 0.7 ? (
            <div className={styles.nlogo_wrapper}>
              <Image
                alt="netflix logo"
                className={styles.nlogo}
                src={nlogo}
                fill
              />
            </div>
          ) : null}
          <Image
            alt="Picture"
            src={`https://image.tmdb.org/t/p/w500/${
              backdrop_path || poster_path
            }`}
            fill
            objectFit="cover"
          />
        </div>
        {activePortal ? (
          <CardPortal selector="#cardportal">
            <div
              className={styles.cardPortal}
              style={{
                top: positionArray.y,
                left: positionArray.x,
                minWidth: `${positionArray.width}px`,
                minHeight: `${positionArray.height}px`,
                zIndex: 10,
              }}
            >
              <div className={styles.listItemPortal}>
                <div
                  type="img_container"
                  className={styles.listItemPortal__imgWrapper}
                >
                  {Math.random() < 0.7 ? (
                    <div className={styles.nlogo_wrapper}>
                      <Image
                        alt="netflix logo"
                        className={styles.nlogo}
                        src={nlogo}
                        fill
                      />
                    </div>
                  ) : null}
                  <Image
                    alt="Picture"
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    fill
                    objectFit="cover"
                  />
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.features}>
                    <div className={styles.left}>
                      <ion-icon name="caret-forward-circle"></ion-icon>
                      <ion-icon name="add-circle-outline"></ion-icon>{" "}
                    </div>
                    <div className={styles.right}>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="heart-dislike-outline"></ion-icon>
                      <ion-icon name="albums-outline"></ion-icon>
                      <ion-icon name="close-circle-outline"></ion-icon>
                    </div>
                  </div>

                  <div className={styles.inlineData}>
                    <span className={styles.age}>16+</span>
                    <span className={styles.volumenes}>
                      {Math.ceil(Math.random() * 10)} Volúmenes
                    </span>
                    <span className={styles.quality}>HD</span>
                  </div>

                  <div className={styles.tags}>
                    <ul>
                      <li>De investigación</li>
                      <li>Crímenes reales</li>
                      <li>Ovnis</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.moreInfo}>
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
    </>
  );
};
export default Item;
