import React from "react";
import { getimgUrl } from "../../utills";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getimgUrl("about/AboutImg.png")}
          alt=""
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getimgUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with hands on practice in building
                responsive and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getimgUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with hands on practice in building
                responsive and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getimgUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with hands on practice in building
                responsive and optimized sites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
