import React from "react";
import styles from "./Hero.module.css";
import {getImageURL} from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
    <img src={getImageURL("hero/heroImage.png")} alt="hero-image-location" className={styles.heroImg}/>
      <div className={styles.content}>

        <h1 className={styles.title}>
        Hi, Ivan here!
        </h1>
        <p className={styles.description}>
        Cybersecurity Researcher, Gamer, Game Developer,
        Deep Learning Enthusiast.
        </p>
        <p className={styles.description}>
        Reach Out to learn more!
        </p>
        <a href="mailto:mail.mail@mymail.com" className={styles.contactBtn}>Contact Me!</a>

      </div>
      <div className={styles.topBlur} />

      <div className={styles.bottomBlur} />
  </section>
)
}
