import burger from "../../icons/burger.svg";
import logo from "../../icons/logo.svg";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
export const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Container>
        <a className={styles.header__logo} href="#">
          <svg className={styles.header__icon} width="139" height="26">
            <use href={logo}></use>
          </svg>
        </a>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Home
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Tech Specs
            </a>
          </li>
        </ul>
        <Button text="Compare" isDark={true} />
        <button className={styles.header__menu} type="button">
          <svg className={styles.header__burger} width="32" height="32">
            <use href={burger}></use>
          </svg>
        </button>
      </Container>
    </header>
  );
};
