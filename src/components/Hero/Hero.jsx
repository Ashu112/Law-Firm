import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/Hero Image.png";

const Hero = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.heroText}>
          <div>
            <h1>You don’t have to </h1>
            <h1>Fight them Alone.</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            iste ab! Libero repellendus aut dolore, alias totam id inventore
            laudantium reprehenderit perferendis. Assumenda ad nisi vel omnis
            doloribus a sapiente?
          </p>
        </div>
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
