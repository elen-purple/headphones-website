import imgmobile from "../../../imgs/mobile/homepage/hero/headphone@mobile.webp";
import imgdesktop from "../../../imgs/desktop/homepage/hero/headphone@desktop.webp";
import styles from "./Hero.module.scss";
import { Container } from "../../../components/Container/Container";
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.hero__title}>Resonance</h1>
        <h2 className={styles.hero__subtitle}>Aura Pro II</h2>
        <picture>
          <source srcSet={imgdesktop} media="(min-width: 1120px)" />
          <source srcSet={imgmobile} media="(max-width: 1119px)" />
          <img
            className={styles.hero__img}
            width="420"
            height="420"
            src={imgmobile}
            alt="Headphones"
          />
        </picture>
        <div className={styles.hero__bg}></div>
      </Container>
    </section>
  );
};
