import benefit1mobile from "../../../imgs/mobile/homepage/benefits/benefit-1@mobile.webp";
import benefit1desktop from "../../../imgs/desktop/homepage/benefits/benefit-1@desktop.webp";
import benefit2mobile from "../../../imgs/mobile/homepage/benefits/benefit-2@mobile.webp";
import benefit2desktop from "../../../imgs/desktop/homepage/benefits/benefit-2@desktop.webp";
import benefit3mobile from "../../../imgs/mobile/homepage/benefits/benefit-3@mobile.webp";
import benefit3desktop from "../../../imgs/desktop/homepage/benefits/benefit-3@desktop.webp";
export const Benefits = () => {
  return (
    <section>
      <h2 hidden>Benefits</h2>
      <ul>
        <li>
          <h3>Deep lows. Lush mids. Airy highs. All perfectly in balance.</h3>
          <picture>
            <source srcSet={benefit1desktop} media="(min-width: 1120px)" />
            <source srcSet={benefit1mobile} media="(max-width: 1119px)" />
            <img
              width="420"
              height="420"
              src={benefit1mobile}
              alt="Headphones"
            />
          </picture>
        </li>
        <li>
          <h3>Silence distractions. Control everything with a gentle tap.</h3>
          <picture>
            <source srcSet={benefit2desktop} media="(min-width: 1120px)" />
            <source srcSet={benefit2mobile} media="(max-width: 1119px)" />
            <img
              width="420"
              height="420"
              src={benefit2mobile}
              alt="Headphones"
            />
          </picture>
        </li>
        <li>
          <h3>Thoughtfully packed in plastic-free, high quality materials.</h3>
          <picture>
            <source srcSet={benefit3desktop} media="(min-width: 1120px)" />
            <source srcSet={benefit3mobile} media="(max-width: 1119px)" />
            <img
              width="420"
              height="420"
              src={benefit3mobile}
              alt="Headphones"
            />
          </picture>
        </li>
      </ul>
    </section>
  );
};
