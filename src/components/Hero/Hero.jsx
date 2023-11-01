import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/Hero Image.png";

const Hero = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.heroText}>
          <div className={styles.heading}>
            <h1 style={{ fontSize: "50px", fontWeight: "500" }}>
              You don’t have to{" "}
            </h1>
            <h1 style={{ fontSize: "65px", fontWeight: "700" }}>
              Fight them Alone.
            </h1>
          </div>
          <p className={styles.HeroPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            iste ab! Libero repellendus aut dolore, alias totam id inventore
            laudantium reprehenderit perferendis. Assumenda ad nisi vel omnis
            doloribus a sapiente?
          </p>
          <form className={styles.heroBar}>
            <input className={styles.search} type="text" placeholder="Enter your eamil address"></input>
            <button className={styles.button}>Let’s Talk</button>
          </form>
        </div>
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
