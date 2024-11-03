import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/_contactform.module.scss";
import Button from "./Button";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          nom
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        <FontAwesomeIcon icon={faExclamationCircle} className={styles.icon} /> */}
        <small className={styles.error}>error</small>
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="email">
          email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        <FontAwesomeIcon icon={faExclamationCircle} className={styles.icon} /> */}
        <small className={styles.error}>error</small>
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="message">
          message
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {/* <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        <FontAwesomeIcon icon={faExclamationCircle} className={styles.icon} /> */}
        <small className={styles.error}>error</small>
      </div>
      <div className={styles.button}>
        <Button label="submit" onClick={handleClick} />
      </div>
    </form>
  );
}

export default ContactForm;
