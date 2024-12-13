import Codeline from "./Codeline";
import styles from "../styles/components/_project.module.scss";

const Project = ({ name, img, description, stack, date, onClick }) => {
  return (
    <article className={styles.project} role="button" onClick={onClick}>
      <img className={styles.project_img} src={img} alt={name} />
      <div className={styles.project_text}>
        <p className={styles.project_title}>{name}</p>
        <p>{description}</p>
        <p className={styles.project_tech}>
          Tech stack :
          {stack.map((tech, index) => (
            <Codeline key={index}>{tech}</Codeline>
          ))}
        </p>
        <p className={styles.project_date}>{date}</p>
      </div>
    </article>
  );
};

export default Project;
