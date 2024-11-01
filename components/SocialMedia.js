import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import styles from "../styles/components/_socialmedia.module.scss";

function SocialMedia({ href, icon, label }) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        data-tooltip-id={label}
        data-tooltip-content={label}
      >
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </a>
      <Tooltip id={label} style={{ fontSize: "1.4rem" }} />
    </>
  );
}

export default SocialMedia;
