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
export const Color = () => {
  return (
    <section>
      <h2>Your Style. Your Sound.</h2>
      <p>
        Studio-grade acoustics that dissolve distractions and awaken clarity.
      </p>
      <ul>
        <li>
          <picture>
            <source srcSet={yellowdesktop} media="(min-width: 1120px)" />
            <source srcSet={yellowmobile} media="(max-width: 1119px)" />
            <img width="420" height="420" src={yellowmobile} alt="Headphone" />
          </picture>
        </li>
        <li>
          <picture>
            <source srcSet={greendesktop} media="(min-width: 1120px)" />
            <source srcSet={greenmobile} media="(max-width: 1119px)" />
            <img width="420" height="420" src={greenmobile} alt="Headphone" />
          </picture>
        </li>
        <li>
          <picture>
            <source srcSet={reddesktop} media="(min-width: 1120px)" />
            <source srcSet={redmobile} media="(max-width: 1119px)" />
            <img width="420" height="420" src={redmobile} alt="Headphone" />
          </picture>
        </li>
        <li>
          <picture>
            <source srcSet={bluedesktop} media="(min-width: 1120px)" />
            <source srcSet={bluemobile} media="(max-width: 1119px)" />
            <img width="420" height="420" src={bluemobile} alt="Headphone" />
          </picture>
        </li>
        <li>
          <picture>
            <source srcSet={purpledesktop} media="(min-width: 1120px)" />
            <source srcSet={purplemobile} media="(max-width: 1119px)" />
            <img width="420" height="420" src={purplemobile} alt="Headphone" />
          </picture>
        </li>
        <li>
          <picture>
            <source srcSet={whitedesktop} media="(min-width: 1120px)" />
            <source srcSet={whitemobile} media="(max-width: 1119px)" />
            <img
              width="420"
              height="420"
              src={whitemobile}
              alt="Blue headphones"
            />
          </picture>
        </li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>Choose a color that fits your flow.</p>
    </section>
  );
};
