import React from "react";
import { getimgUrl } from "../../utills";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Asmit</h1>
        <p className={styles.description}>
          I'm a Front-end developer using React. Currently looking for the
          opportunities to explore my learning!
        </p>
        <a className={styles.contactBtn} href="mailto:akk86708@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getimgUrl("hero/Heroimg.png")}
        alt=""
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
