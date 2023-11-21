import { useContext, useState } from "react";
import styles from "../styles/App.module.css";
import AboutComponent from "./About";
import Home from "./Home";
import ProjectComponent from "./Projects";
import SkillsComponent from "./Skills";
import { APPContext } from "../Layouts/AppLayout";
import Footer from "./Footer";
import MyCorner from "./MyCorner";
import { FaAngleUp } from "react-icons/fa";

function HomeComponent() {
  const { setDropDown, isLight} = useContext(APPContext)
  const [scrollable, setScrollable] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  window.addEventListener("scroll", ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = Math.ceil(window.scrollY);
    setScrollable(scrollable);
    setScrolled(scrolled);
    // console.log(scrollable - scrolled < 2340)
  })


   const HandleDropDown = ()=>{
    setDropDown(false)
  }
  const HandleScrollUp = ()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  }


  return (
    <div className={isLight ? styles["rootLayout_container_light"] : styles["rootLayout_container_dark"]} onClick={()=>HandleDropDown()}>
      <Home />
      <SkillsComponent/>
      <ProjectComponent />
      <AboutComponent />
      <MyCorner />
      <Footer />
      {/* <div className={scrolled !== 0 && scrollable - scrolled < 2340 ? styles["scroll_display"] : styles["scroll_not_display"]}> */}
        <div onClick={()=>HandleScrollUp()} className={scrolled !== 0 && scrollable - scrolled < 2340 ? styles["scrollUp_container_show"] : styles["scrollUp_container_hide"]}>
          <FaAngleUp size="1rem" color={isLight ? "rgba(217, 213, 234, 0.899)" : "rgb(2, 3, 67)"}/>
        </div>
      {/* </div> */}
    </div>
  );
}

export default HomeComponent;
