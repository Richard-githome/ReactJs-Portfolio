import styles from "../styles/App.module.css";
import { articles } from "../data/portfolio_Data";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal"
import { APPContext } from "../Layouts/AppLayout";
import Form from "./Form";

const MyCorner = () => {
  const { myCorner, isLight } = useContext(APPContext);

  return (
    <section ref={myCorner} id="myCorner" className={styles.form_wrapper}>
      <div className={styles.form_main_container}>
        <div className={isLight ? styles["form_title_container_light"] : styles["form_title_container_dark"]}>
          <Fade direction="up" triggerOnce={true}>
          <h3 className={styles.form_title}>My Corner</h3>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce={true}>
        <div className={styles.form_article_container}>
          <Fade direction="up" triggerOnce={true}>
          <p className={isLight ? styles["form_article_note_light"] : styles["form_article_note_dark"]}>
            I've got some articles to support developers on my blog{" "}
            <a href="https://emekaomeje.hashnode.dev" target="blank">
              @Essential.Dev
            </a>
            .
          </p>
          </Fade>
          <div className={styles.form_article_item_container}>
            <Fade direction="up" triggerOnce={true}>
            <p className={isLight ? styles["form_article_note_light"] : styles["form_article_note_dark"]}>
              Few of my articles on{" "}
              <a href="https://emekaomeje.hashnode.dev/" target="blank">
                Hashnode
              </a>
              :
            </p>
            <hr />
            </Fade>
            <div className={styles.form_article_each_item_container}>
            {articles.map((article, index) => (
              <div className={styles.form_article_item} key={index}>
                <Fade delay={index * 100} direction="right" triggerOnce={true}>
                <a href={article.url} target="blank">
                  {article.title}
                </a>
                </Fade>
              </div>
            ))}
            </div>
          </div>
        </div>
        </Fade>
        <Form />
      </div>
    </section>
  );
};
export default MyCorner;
