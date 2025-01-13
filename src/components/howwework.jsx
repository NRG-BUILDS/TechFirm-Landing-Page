import React from "react";
import styles from "./HowWeWork.module.css";

const HowWeWorkSection = () => {
  return (
    <section className={styles.section} id="howwework">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1>How We Work</h1>
          <p className={styles.paragraph}>
            Collaboration. This summarizes the synergy amongst our Associates,
            which leads to unlocking spirited business solutions. In addition,
            we immerse our clients in our thoughts and work processes, with a
            view to aligning with the best and brightest. Our work atmosphere is
            unrestricted and unbundled, yielding an unfettered access to
            limitless knowledge and solutions. We have also benefitted from our
            priced external resource persons and groups, who are ever ready to
            work it out with our team.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/img/howwework.jpg"
            alt="Business professional"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
