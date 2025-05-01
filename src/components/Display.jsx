import styles from "./Display.module.css";

const Display = ({ calval }) => {
  return (
    <input className={styles.display} type="text" value={calval} readOnly />
  );
};

export default Display;
