import React from "react";
import styles from "./About.module.css";
import {getImageURL} from "../../utils";


export const About = () => {
  return (
    <section>
      <h1>
      About
      </h1>
      <div>
        <img src={getImageURL("about/aboutImage.png")} alt="about-image-location" />
        <ul>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              Researcher
              </h3>
              <p>
              Cybersecurity Researcher with 4 years of experience, specialising in research of OT security.
              My research mainly focus on securing water treatment systems and Maritime systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              Backend Developer
              </h3>
              <p>
              Backend Developer with several years of experience
              </p>
            </div>
          </li>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              AI Enthusiast
              </h3>
              <p>
              I'm passionate about the development of AI. I have experiences in devloping AI-based Anomaly Detectors for water distribution systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              Beginner Frontend Developer
              </h3>
              <p>
              Recently became a developer of responsive websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              Aspiring Game Developer
              </h3>
              <p>
              Recently became a developer of responsive websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItemText}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Icon" />
            <div>
              <h3>
              Digital Artist
              </h3>
              <p>
              Recently became a developer of responsive websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>);
}