import Codeline from "./Codeline";
import Button from "./Button";
import styles from "../styles/components/_project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Project = ({ name, img, description, stack, date, onClick }) => {
  return (
    <article className={styles.project} role="button" onClick={onClick}>
      <img className={styles.project_img} src={img} alt={name} />
      <div className={styles.project_text}>
        <p className={styles.project_title}>{name}</p>
        <p className={styles.project_description}>{description}</p>
        <p className={styles.project_tech}>
          Tech stack :
          {stack.map((tech, index) => (
            <Codeline key={index}>{tech}</Codeline>
          ))}
        </p>
        <p className={styles.project_date}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={styles.project_icon}
          />
          {date}
        </p>
      </div>
      <div className={styles.project_button}>
        <Button>plus d'infos</Button>
      </div>
    </article>
  );
};

export default Project;
