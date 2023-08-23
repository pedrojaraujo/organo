import styles from "./style.module.css";

export const Banner = () => {
  return (
    <header className={styles.banner__container}>
      <img src="./images/banner.png" alt="banner__header" />
    </header>
  );
};
