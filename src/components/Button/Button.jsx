import styles from "./Button.module.scss";
export const Button = ({ text, isDark = false }) => {
  return (
    <a className={styles.btn} data-dark={isDark} href="#">
      <span className={styles.btn__text}>{text}</span>
    </a>
  );
};
