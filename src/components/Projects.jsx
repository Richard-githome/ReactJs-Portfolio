import { FiExternalLink } from "react-icons/fi";
import styles from "../styles/App.module.css";
import ProjectItem from "./ProjectItem";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal"
import { APPContext } from "../Layouts/AppLayout";


const ProjectComponent = () => {
  // const HandleMainGitHubRedirect = () => {
  //   window.location.href = "https://github.com/Richard-githome";
  // };

  const {projects, isLight} = useContext(APPContext)
  
  return (
    <section ref={projects} id="projects" className={styles.project_section}>
      <div className={isLight ? styles["project_wrapper_light"] : styles["project_wrapper_dark"]}>
      <div className={styles.project_container}>
      <Fade direction="up" triggerOnce={true}>
        <div className={isLight ? styles["project_header_container_light"] : styles["project_header_container_dark"]}>
          <h2 className={styles.project_title}>Projects</h2>
          <div
            // onClick={() => HandleMainGitHubRedirect()}
            className={isLight ? styles["project_github_btn_light"] : styles["project_github_btn_dark"]}
          >
            <a href="https://github.com/Richard-githome" target="blank">
            GitHub Repo <FiExternalLink />{" "}
            </a>
          </div>
        </div>
        </Fade>
        <div className={styles.project_card_container}>
          <Fade direction="up" triggerOnce={true}>
          <div className={isLight ? styles["project_card_note_light"] : styles["project_card_note_dark"]}>
            <small>My top 6 repos:</small>
            <hr/>
          </div>
          <ProjectItem />
          </Fade>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
