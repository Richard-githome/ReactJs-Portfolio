import { useContext, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import toast from "react-hot-toast";
import { Fade} from "react-awesome-reveal"
import styles from "../styles/App.module.css";
import { APPContext } from "../Layouts/AppLayout";

const Form = () => {
  const [formProps, setFormProps] = useState({user_name: "", email: "", message: ""});
  const form = useRef();
  const { isLight}= useContext(APPContext)

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,
      import.meta.env.VITE_EMAILJS_PUB_KEY,
      form.current
    );
    setFormProps({user_name: "", email: "", message: ""})

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,
      "contact_form",
      form.current,
      import.meta.env.VITE_EMAILJS_PUB_KEY
    ).then((result)=>{
      console.log(result)
      toast.success("Successfully sent")
    }).catch((error)=>{
      console.error(error)
      toast.error("Failed!")
    });
  };

  return (
    <>
    <Fade direction="up" triggerOnce={true}>
    <form
        ref={form}
        className={styles.form_element}
        onSubmit={(e) => HandleSubmit(e)}
      >
        <div  className={styles.form_container}>
          <div className={isLight ? "" : styles["form_title_dark"]}>
            <h2 className={styles["form_tag"]}>Get In Touch</h2>
          </div>
            <label htmlFor="user_name" className={isLight ? styles["form_label_light"] : styles["form_label_dark"]}>
              Name
            </label>
            <input
              className={isLight ? styles["form_input_light"] : styles["form_input_dark"]}
              name="user_name"
              type="text"
              value={formProps.user_name}
              onChange={(e) => setFormProps({ ...formProps, user_name: e.target.value})}
              placeholder="Your name - 'John Doe'"
            />
            <label htmlFor="email" className={isLight ? styles["form_label_light"] : styles["form_label_dark"]}>
              Email
            </label>
            <input
              className={isLight ? styles["form_input_light"] : styles["form_input_dark"]}
              name="email"
              type="email"
              value={formProps.email}
              onChange={(e) => setFormProps({ ...formProps, email: e.target.value})}
              placeholder="example@domain.com"
            />
            <label htmlFor="message" className={isLight ? styles["form_label_light"] : styles["form_label_dark"]}>
              Your Message
            </label>
            <textarea
              className={isLight ? styles["form_input_light"] : styles["form_input_dark"]}
              name="message"
              type="textarea"
              value={formProps.message}
              onChange={(e) => setFormProps({ ...formProps, message: e.target.value})}
              placeholder="What's the project | article about? 🤷‍♂️ Let's chat..."
            ></textarea>
          </div>
          <button type="submit" className={styles.form_btn} value="Subscribe" >Subscribe</button>
      </form>
    </Fade>
    </>
  );
};

export default Form;
