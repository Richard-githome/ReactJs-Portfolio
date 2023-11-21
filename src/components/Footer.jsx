import {
  SiHashnode,
  SiGmail,
  SiTwitter,
  SiWhatsapp,
  SiLinkedin,
} from "react-icons/si";
import styles from "../styles/App.module.css";
import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal"
import { APPContext } from "../Layouts/AppLayout";

const Footer = () => {
  const {isLight} = useContext(APPContext)

  const thisYear = new Date().getFullYear();
  const whatsappTxt = "Hi 👋";

  const [whatsappTxtDisplay, setWhatsappTxtDisplay] = useState("")
  useEffect(()=>{
    setTimeout(() => {
      setWhatsappTxtDisplay(whatsappTxt)
    }, 5000);
  },[])

  return (
    <footer >
      <div className={isLight ? styles["footer_wrapper_light"] : styles["footer_wrapper_dark"]}>
      <div className={styles.footer_item_container}>
        <Fade direction="up" triggerOnce={true}>
        <small className={styles.footer_items_tag}>My socials</small>
        </Fade>
        <div className={styles.footer_items}>
        <Fade cascade={0.2} direction="left" triggerOnce={true}>
        <div className={styles["footer_each_item"]}>
            <a href="mailto:chukwuemekaomeje.rich@gmail.com" target="blank">
              <SiGmail size="1.1rem" color={isLight ? "rgb(2, 3, 67)" : "rgba(217, 213, 234, 0.899)"}/>
            </a>
          </div>
          <div className={styles.footer_each_item}>
            <a href="https://emekaomeje.hashnode.dev/" target="blank">
              <SiHashnode size="1.1rem" ccolor={isLight ? "rgb(2, 3, 67)" : "rgba(217, 213, 234, 0.899)"} />
            </a>
          </div>
          <div className={styles.footer_each_item}>
            <a href="https://twitter.com/Meje_Emeka" target="blank">
              <SiTwitter size="1.1rem" color={isLight ? "rgb(2, 3, 67)" : "rgba(217, 213, 234, 0.899)"} />
            </a>
          </div>
          <div className={styles.footer_each_item}>
            <a href="https://www.linkedin.com/in/richardomeje/" target="blank">
              <SiLinkedin size="1.1rem" color={isLight ? "rgb(2, 3, 67)" : "rgba(217, 213, 234, 0.899)"}/>
            </a>
          </div>
          <div className={styles["footer_each_item"] && styles["chat_whatsapp_2"]}>
            <a href="https://wa.me/2348164897281" target="blank">
              <SiWhatsapp size="1.1rem" color={isLight ? "rgb(2, 3, 67)" : "rgba(217, 213, 234, 0.899)"}/>
            </a>
          </div>
        </Fade>
          <div className={styles.footer_each_item && styles["chat_whatsapp_1"]}>
              <a href="https://wa.me/2348164897281" target="blank">
                <div className={styles.chat_whatsapp_icon_container}>
                <SiWhatsapp size="1.2rem" color="#4da962" />{" "}
                </div>
                <div className={styles.chat_whatsapp_text_container}><small className={styles.chat_whatsapp_text}>{whatsappTxtDisplay}</small>
                  </div>
              </a>
          </div>
        </div>
      </div>
      </div>
      <div className={isLight ? styles["footer_note_section_light"] : styles["footer_note_section_dark"]}>
        <div className={styles.footer_note_container }>
          <small className={styles.footer_note}>
            {" "}
            Made with ❤️ from Richard, &copy; {thisYear}.{" "}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
