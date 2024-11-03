import React from "react";
import styles from "../styles/components/_button.module.scss";

function Button({ label, onClick, disabled }) {
  return (
    <button className={styles.main} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
