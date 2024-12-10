import styles from "../styles/components/_codeline.module.scss";

const Codeline = ({ children }) => {
  return <code className={styles.main}>{children}</code>;
};

export default Codeline;
