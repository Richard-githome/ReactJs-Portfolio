import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { APPContext } from "../Layouts/AppLayout";
import styles from "../styles/App.module.css";
import heroImg from "../images/portfolio_img_2.png"



const Home = () => {
  const { home, isLight, setIsLight } = useContext(APPContext);
  const HandleLight = () => {
    if (!isLight) {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  };

  return (
    <section ref={home} id="home" className={styles.home_section}>
      <div
        className={
          isLight ? styles["home_wrapper_light"] : styles["home_wrapper_dark"]
        }
      >
        <div className={styles.home_container}>
          <Fade triggerOnce={true}>
            <div
              className={styles.homeMood_hamburger_container}
              onClick={() => HandleLight()}
            >
              <div
                className={
                  isLight
                    ? styles["display_hamburger_icon_light"]
                    : styles["hide_hamburger_icon"]
                }
              >
                <BsLightbulb size={"1.3rem"} color="rgb(3, 4, 67)" />
              </div>
              <div
                className={
                  isLight
                    ? styles["hide_hamburger_icon"]
                    : styles["display_hamburger_icon_dark"]
                }
              >
                <BsLightbulbFill
                  size={"1.3rem"}
                  color="rgba(217, 213, 234, 0.899)"
                />
              </div>
              <small className={styles.hamburger_note}>
                {isLight ? "Light Mode" : "Dark Mode"}
              </small>
            </div>
          </Fade>

          <div className={styles.home_intro_container}>
            <Fade damping={0.7} direction="up" triggerOnce={true}>
              <h2 className={styles.home_intro_note_0}>Hi, I'm</h2>
              <h2 className={styles.home_intro_note_1}>Chukwuemeka Richard.</h2>
              <h4 className={styles.home_intro_note_2}>
                A FullStack Software Developer.
              </h4>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <button
                className={
                  isLight
                    ? styles["home_resume_btn_light"]
                    : styles["home_resume_btn_dark"]
                }
              >
                <a
                  href="../data/Emeka-Omeje-CV.pdf"
                  download="Emeka_Omeje_resume.pdf"
                >
                  <FaDownload a /> Resumé
                </a>
              </button>
            </Fade>
          </div>
          <Fade direction="up" triggerOnce={true}>
            <div
              className={
                isLight
                  ? styles["home_interest_container_light"]
                  : styles["home_interest_container_dark"]
              }
            >
              <Fade damping={0.3} triggerOnce={true}>
                <p
                  className={
                    isLight
                      ? styles["home_interest_1_light"]
                      : styles["home_interest_1_dark"]
                  }
                >
                  I build amazing, secure, scalable, and performant applications
                  for the web. As well, I write essentials articles that benefit
                  developers.
                </p>
                <div
                  className={
                    isLight
                      ? styles["home_interest_2_light"]
                      : styles["home_interest_2_dark"]
                  }
                >
                  <small>
                    <em>- Share your ideas with me, and I'd build them.</em>
                  </small>
                </div>
              </Fade>
            </div>
          </Fade>
          <img src={heroImg} alt="hero_img" className={styles.home_hero_img}/>
        </div>
      </div>
    </section>
  );
};

export default Home;
