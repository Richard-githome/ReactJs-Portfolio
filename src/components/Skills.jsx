import styles from "../styles/App.module.css";
import { skills } from "../data/portfolio_Data";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal"
import { APPContext } from "../Layouts/AppLayout";

const SkillsComponent = () => {
  const {isLight} = useContext(APPContext)
  return (
    <section className={styles.skills_section}>
      <Fade direction="up" triggerOnce={true}>
      <div className={styles.skills_wrapper}>
      <div className={styles["skills_container"]}>
        <h2 className={isLight ? styles["skills_title_light"] : styles["skills_title_dark"]}>Skills</h2>
        <div className={isLight ? styles["skills_item_container_light"] : styles["skills_item_container_dark"]}>
          {skills.map((skill, index) => (
            <div className={styles.skills_card} key={index}>
              <Fade cascade={false} delay={index * 100} direction="left" triggerOnce={true}>
              <h1 className={isLight ? styles["skills_card_slug_light"] : styles["skills_card_slug_dark"]}>{skill.slug}</h1>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      </div>
      </Fade>
    </section>
  );
};

export default SkillsComponent;
