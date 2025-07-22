import imgmobile from "../../../imgs/mobile/homepage/hero/headphone@mobile.webp";
import imgdesktop from "../../../imgs/desktop/homepage/hero/headphone@desktop.webp";
export const Hero = () => {
  return (
    <section>
      <h1>Resonance</h1>
      <h2>Aura Pro II</h2>
      <picture>
        <source srcSet={imgdesktop} media="(min-width: 1120px)" />
        <source srcSet={imgmobile} media="(max-width: 1119px)" />
        <img width="420" height="420" src={imgmobile} alt="Headphones" />
      </picture>
    </section>
  );
};
