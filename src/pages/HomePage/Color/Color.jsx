import yellowmobile from "../../../imgs/mobile/homepage/color/yellow@mobile.webp";
import yellowdesktop from "../../../imgs/desktop/homepage/color/yellow@desktop.webp";
import greenmobile from "../../../imgs/mobile/homepage/color/green@mobile.webp";
import greendesktop from "../../../imgs/desktop/homepage/color/green@desktop.webp";
import redmobile from "../../../imgs/mobile/homepage/color/red@mobile.webp";
import reddesktop from "../../../imgs/desktop/homepage/color/red@desktop.webp";
import bluemobile from "../../../imgs/mobile/homepage/color/blue@mobile.webp";
import bluedesktop from "../../../imgs/desktop/homepage/color/blue@desktop.webp";
import purplemobile from "../../../imgs/mobile/homepage/color/purple@mobile.webp";
import purpledesktop from "../../../imgs/desktop/homepage/color/purple@desktop.webp";
import whitemobile from "../../../imgs/mobile/homepage/color/white@mobile.webp";
import whitedesktop from "../../../imgs/desktop/homepage/color/white@desktop.webp";
import { Container } from "../../../components/Container/Container";
import styles from "./Color.module.scss";
export const Color = () => {
  return (
    <section className={styles.color}>
      <Container>
        <h2 className={styles.color__title}>Your Style. Your Sound.</h2>
        <p className={styles.color__desc}>
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
        <ul className={styles.color__list}>
          <li className={styles.color__item}>
            <picture>
              <source srcSet={yellowdesktop} media="(min-width: 1120px)" />
              <source srcSet={yellowmobile} media="(max-width: 1119px)" />
              <img
                className={styles.color__img}
                width="420"
                height="420"
                src={yellowmobile}
                alt="Headphone"
              />
            </picture>
          </li>
          <li className={styles.color__item}>
            <picture>
              <source srcSet={greendesktop} media="(min-width: 1120px)" />
              <source srcSet={greenmobile} media="(max-width: 1119px)" />
              <img
                className={styles.color__img}
                width="420"
                height="420"
                src={greenmobile}
                alt="Headphone"
              />
            </picture>
          </li>
          <li className={styles.color__item}>
            <picture>
              <source srcSet={reddesktop} media="(min-width: 1120px)" />
              <source srcSet={redmobile} media="(max-width: 1119px)" />
              <img
                className={styles.color__img}
                width="420"
                height="420"
                src={redmobile}
                alt="Headphone"
              />
            </picture>
          </li>
        </ul>
        <ul className={styles.color__dots}>
          <li className={styles.color__dot}>
            <button className={styles.color__btn}></button>
          </li>
          <li className={styles.color__dot}>
            <button className={styles.color__btn}></button>
          </li>
          <li className={styles.color__dot}>
            <button className={styles.color__btn}></button>
          </li>
        </ul>
        <p className={styles.color__choose}>
          Choose a color that fits your flow.
        </p>
      </Container>
    </section>
  );
};
