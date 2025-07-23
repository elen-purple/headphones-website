import logo from "../../icons/logo.svg";
import discord from "../../icons/discord.svg";
import x from "../../icons/x.svg";
import meta from "../../icons/meta.svg";
import { Button } from "../Button/Button";
import styles from "./Footer.module.scss";
import { Container } from "../Container/Container";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__header}>
          <h2 className={styles.footer__title}>Sound. Presence. Purpose.</h2>
          <p className={styles.footer__desc}>
            Focused on crafting immersive audio experiences.
            <br />
            We believe sound should not just be heard—it should move you.
          </p>
          <div className={styles.footer__btns}>
            <Button text="Aura Pro II" />
            <Button text="Flow II" />
          </div>
        </div>
        <div className={styles.footer__line}></div>
        <div className={styles.footer__bottom}>
          <a className={styles.footer__logo} href="#">
            <svg className={styles.footer__icon} width="139" height="26">
              <use href={logo}></use>
            </svg>
          </a>
          <p className={styles.footer__copy}>
            © 2025 Resonance. All rights reserved.
          </p>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="#">
                <svg className={styles.footer__media} width="26" height="26">
                  <use href={discord}></use>
                </svg>
              </a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="#">
                <svg className={styles.footer__media} width="26" height="26">
                  <use href={x}></use>
                </svg>
              </a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="#">
                <svg className={styles.footer__media} width="26" height="26">
                  <use href={meta}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
