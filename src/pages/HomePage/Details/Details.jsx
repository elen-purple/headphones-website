import detail1mobile from "../../../imgs/mobile/homepage/details/detail-1@mobile.webp";
import detail1desktop from "../../../imgs/desktop/homepage/details/detail-1@desktop.webp";
import detail2mobile from "../../../imgs/mobile/homepage/details/detail-2@mobile.webp";
import detail2desktop from "../../../imgs/desktop/homepage/details/detail-2@desktop.webp";
import detail3mobile from "../../../imgs/mobile/homepage/details/detail-3@mobile.webp";
import detail3desktop from "../../../imgs/desktop/homepage/details/detail-3@desktop.webp";
import detail4mobile from "../../../imgs/mobile/homepage/details/detail-4@mobile.webp";
import detail4desktop from "../../../imgs/desktop/homepage/details/detail-4@desktop.webp";
import detail5mobile from "../../../imgs/mobile/homepage/details/detail-5@mobile.webp";
import detail5desktop from "../../../imgs/desktop/homepage/details/detail-5@desktop.webp";
import detail6mobile from "../../../imgs/mobile/homepage/details/detail-6@mobile.webp";
import detail6desktop from "../../../imgs/desktop/homepage/details/detail-6@desktop.webp";
import styles from "./Detail.module.scss";
import { Container } from "../../../components/Container/Container";
export const Details = () => {
  return (
    <section className={styles.details}>
      <Container>
        <h2 className={styles.details__title}>Every Detail matters</h2>
        <p className={styles.details__desc}>
          From the stitch to the signal, precision lives here.
        </p>
        <ul className={styles.details__list}>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail1desktop} media="(min-width: 1280px)" />
              <source srcSet={detail1mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail1mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail2desktop} media="(min-width: 1280px)" />
              <source srcSet={detail2mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail2mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail3desktop} media="(min-width: 1280px)" />
              <source srcSet={detail3mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail3mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail4desktop} media="(min-width: 1280px)" />
              <source srcSet={detail4mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail4mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail5desktop} media="(min-width: 1280px)" />
              <source srcSet={detail5mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail5mobile}
                alt="Headphones"
              />
            </picture>
          </li>
          <li className={styles.details__item}>
            <picture>
              <source srcSet={detail6desktop} media="(min-width: 1280px)" />
              <source srcSet={detail6mobile} media="(max-width: 1279px)" />
              <img
                width="420"
                height="420"
                src={detail6mobile}
                alt="Headphones"
              />
            </picture>
          </li>
        </ul>
      </Container>
    </section>
  );
};
