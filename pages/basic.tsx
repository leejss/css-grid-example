import styles from "./basic.module.css";

const BasicPage = () => {
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["grid-item"]}></div>
      <div className={styles["grid-item"]}></div>
      <div className={styles["grid-item"]}></div>
      <div className={styles["grid-item"]}></div>
    </div>
  );
};

export default BasicPage;

// size of item width and height in the container ?
