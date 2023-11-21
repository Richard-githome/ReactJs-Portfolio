import { useContext } from "react";
import { Link } from "react-router-dom";
import { APPContext } from "../Layouts/AppLayout";
import { IoFootstepsSharp } from "react-icons/io5";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import styles from "../styles/App.module.css";

const NavBarComponent = () => {
  const { dropDown, setDropDown, home, about, projects, myCorner, isLight } =
    useContext(APPContext);
  const HandleDropDown = (action) => {
    if (action === "open") {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const HandleSectionScroll = (sectionRef) => {
    window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
    setDropDown(false);
  };

  return (
    <div className={styles.navbar_wrapper}>
      <div className={isLight ? styles["navbar_container_light"] : styles["navbar_container_dark"]}>
        <nav>
          <Link to={"/"} className={isLight ? styles["navbar_icon_container_light"] : styles["navbar_icon_container_dark"]}>
            <h2 className={styles.navbar_icon_tag}>
              P<span className={styles.navbar_icon_tag_span}>ORTFOLIO</span>
            </h2>
          </Link>
          <ul
            className={
              !dropDown ? styles["navbar_links_container_close"] : isLight ? styles["navbar_links_container_display_light"] : styles["navbar_links_container_display_dark"]
            }
          >
              <li
                onClick={() => HandleSectionScroll(home)}
                className={isLight ? styles["navbar_links_item_light"] : styles["navbar_links_item_dark"]}
              >
                Home
              </li>
              <li
                onClick={() => HandleSectionScroll(projects)}
                className={isLight ? styles["navbar_links_item_light"] : styles["navbar_links_item_dark"]}
              >
                Projects
              </li>
              <li
                onClick={() => HandleSectionScroll(about)}
                className={isLight ? styles["navbar_links_item_light"] : styles["navbar_links_item_dark"]}
              >
                About
              </li>

              <li
                onClick={() => HandleSectionScroll(myCorner)}
                className={isLight ? styles["navbar_links_item_light"] : styles["navbar_links_item_dark"]}
              >
                My Corner
              </li>
          </ul>
        </nav>
        <div className={styles.hamburger_icon_container}>
          <div
            className={
              dropDown
                ? styles["display_hamburger_icon"]
                : styles["non_display_hamburger_icon"]
            }
            onClick={() => HandleDropDown("close")}
          >
            <HiMiniXMark size={"2rem"} color={isLight ? "rgb(213, 202, 202)" : "rgb(3, 4, 67)"} />
          </div>
          <div
            className={
              dropDown
                ? styles["non_display_hamburger_icon"]
                : styles["display_hamburger_icon"]
            }
            onClick={() => HandleDropDown("open")}
          >
            <HiMiniBars3 size={"2rem"} color={isLight ? "rgb(213, 202, 202)" : "rgb(3, 4, 67)"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
// 7024130493
