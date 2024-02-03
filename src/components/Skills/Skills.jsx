import React from "react";
import mySkills from "../../data/mySkills.json";
import { getimgUrl } from "../../utills";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills/Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {mySkills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getimgUrl(skill.imageSrc)}
                    alt={skill.title}
                    className={styles.skillImg}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul></ul>
      </div>
    </section>
  );
};

export default Skills;
