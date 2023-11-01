import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.txtBold}>Let’s Introduce Ourself</div>
        <div className={styles.seprator}></div>
        <div className={styles.lawyer}>
          <div className={styles.lawyerTxt}>Criminal Lawyer</div>
          <p className={styles.lawyerPara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
