import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Link from "next/link";
import styles from "../styles/components/_contactButton.module.scss";

function ContactButton() {
  return (
    <div className={styles.main}>
      <Button>
        <Link href="/ContactPage">
          <span className={styles.content}>
            Contactez moi <FontAwesomeIcon icon={faCircleChevronRight} />
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default ContactButton;
