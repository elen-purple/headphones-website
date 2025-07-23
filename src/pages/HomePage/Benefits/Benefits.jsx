import benefit1mobile from "../../../imgs/mobile/homepage/benefits/benefit-1@mobile.webp";
import benefit1desktop from "../../../imgs/desktop/homepage/benefits/benefit-1@desktop.webp";
import benefit2mobile from "../../../imgs/mobile/homepage/benefits/benefit-2@mobile.webp";
import benefit2desktop from "../../../imgs/desktop/homepage/benefits/benefit-2@desktop.webp";
import benefit3mobile from "../../../imgs/mobile/homepage/benefits/benefit-3@mobile.webp";
import benefit3desktop from "../../../imgs/desktop/homepage/benefits/benefit-3@desktop.webp";
import styles from "./Benefits.module.scss";
import { Container } from "../../../components/Container/Container";
export const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <Container>
        <h2 hidden>Benefits</h2>
        <ul className={styles.benefits__list}>
          <li className={styles.benefits__item}>
            <h3 className={styles.benefits__header}>
              Deep lows. Lush mids. Airy highs. All perfectly in balance.
            </h3>
            <picture>
              <source srcSet={benefit1desktop} media="(min-width: 1280px)" />
              <source srcSet={benefit1mobile} media="(max-width: 1279px)" />
              <img
                className={styles.benefits__img}
                width="420"
                height="420"
                src={benefit1mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.benefits__item}>
            <h3 className={styles.benefits__header}>
              Silence distractions. Control everything with a gentle tap.
            </h3>
            <picture>
              <source srcSet={benefit2desktop} media="(min-width: 1280px)" />
              <source srcSet={benefit2mobile} media="(max-width: 1279px)" />
              <img
                className={styles.benefits__img}
                width="420"
                height="420"
                src={benefit2mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.benefits__item}>
            <h3 className={styles.benefits__header}>
              Thoughtfully packed in plastic-free, high quality materials.
            </h3>
            <picture>
              <source srcSet={benefit3desktop} media="(min-width: 1280px)" />
              <source srcSet={benefit3mobile} media="(max-width: 1279px)" />
              <img
                className={styles.benefits__img}
                width="420"
                height="420"
                src={benefit3mobile}
                alt="Headphones"
              />
            </picture>
          </li>
        </ul>
      </Container>
    </section>
  );
};
