import React from "react";
import { getimgUrl } from "../../utills";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contacts">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getimgUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:akk86708@gmail.com">akk86708@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getimgUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="http://www.linkedin.com/myName">Linkedin.com/Asmit33</a>
        </li>
        <li className={styles.link}>
          <img src={getimgUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="http://www.github.com/myName">Github.com/Asmit33</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
