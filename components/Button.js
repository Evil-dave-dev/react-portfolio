import React from "react";
import styles from "../styles/components/_button.module.scss";

function Button({ children, onClick, disabled, type }) {
  return (
    <button
      className={styles.main}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
