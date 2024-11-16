import React from "react";
import styles from "../styles/components/_button.module.scss";

function Button({ children, onClick, disabled }) {
  return (
    <button className={styles.main} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
