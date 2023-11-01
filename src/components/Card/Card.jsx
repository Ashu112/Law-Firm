import React from "react";
import styles from "./Card.module.css";
import cardImage from "../../assets/CardImage.png";

const Card = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.cardLogo} src={cardImage} alt="card" />
        <div className={styles.banner}>
          <div className={styles.bannerTxt}>{data}% Success Rate</div>
          <p className={styles.bannerPara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <div className={styles.pill}>Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
