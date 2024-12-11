import React from "react";
import styles from "../styles/components/_button.module.scss";

function Button({ children, onClick, disabled, type, animation }) {
  return (
    <button
      className={`${styles.main} ${animation ? styles.animation : ""}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
