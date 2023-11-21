import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "../styles/slick.css";
// import "../styles/slick-theme.css";
import styles from "../styles/App.module.css";
import { APPContext } from "../Layouts/AppLayout";
import { useContext } from "react";

const ProjectItem = () => {
  const { githubData, isLight } = useContext(APPContext);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 700,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {githubData.length > 0 ? (
          githubData.map((repo) => (
            <div className={styles.project_card} key={repo.id}>
              <div className={styles.project_card_header_container}>
                <h3 className={isLight ? styles["project_card_name_light"] : styles["project_card_name_dark"]}>{repo.name}</h3>
                <p className={isLight ? styles["project_card_description_light"] : styles["project_card_description_dark"] }>
                  {repo.description.slice(0, 100)}
                </p>

              </div>
              <div className={styles.project_card_footer_container}>
                <small className={isLight ? styles["project_totalScore_light"] : styles["project_totalScore_dark"]}>
                  Total Star: {repo.stargazers["totalCount"]}
                </small>
                <div className={styles.project_sourceCode_btn}>
                  <a href={repo.url} target="blank">
                    View source code
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No GitHub repository to display.</p>
        )}
      </Slider>
    </>
  );
};

export default ProjectItem;
