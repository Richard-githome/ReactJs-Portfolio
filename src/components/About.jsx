import styles from "../styles/App.module.css";
import img from "../images/portfolio_img_7.png";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal"
import { APPContext } from "../Layouts/AppLayout";

function AboutComponent() {
  const {about, isLight} = useContext(APPContext)

  return (
    <section ref={about} id="about" className={isLight ? styles["about_wrapper_light"] : styles["about_wrapper_dark"]}>
      <div className={styles.about_container}>
        <Fade direction="up" triggerOnce={true}>
        <div className={isLight ? styles["about_title_container_light"] : styles["about_title_container_dark"]}>
          <h3 className={styles.about_title}>About</h3>
        </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
        <div className={isLight ? styles["about_content_container_light"] : styles["about_content_container_dark"]}>
          <div className={styles.about_image_container}>
            <Fade direction="up" triggerOnce={true}>
            <img src={img} alt="Richard's.image" className={styles.about_image} />
            </Fade>
          </div>
          <div className={styles.about_note_body_container}>
            <Fade direction="up" triggerOnce={true}>
            <p className={isLight ? styles["about_note_body_light"] : styles["about_note_body_dark"]}>
            I'm proficient in JavaScript, JQuery, ReactJS, Redux, NodeJS,
            MongoDB, Mongoose, and GraphQL.
            <br />
            <br />
            I have excellent and practical knowledge of Authentication and API
            development using NodeJS, Express, ReactJS and other third-party
            integrations (0Auth.2, Passport).
            <br />
            <br />
            I'm also a technical writer, and currently building a tech blog (<a href="https://emekaomeje.hashnode.dev/" target="blank">@Essentials.Dev</a>) focused on essentials of software development.
            <br/>
            <br />I am interested and actively open to new opportunities in both software development, as well as, technical writing. It can be either
            an internship or junior-level entry roles - an opportunity
            that will challenge me more, expand my network, and also make social impact.
            <br/>I'm open to both on-site and off-site
            opportunities.
          </p>
            </Fade>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutComponent;
