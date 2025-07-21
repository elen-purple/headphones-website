import { Button } from "../Button/Button";
export const Footer = () => {
  return (
    <footer>
      <h2>Sound. Presence. Purpose.</h2>
      <p>
        Focused on crafting immersive audio experiences.
        <br />
        We believe sound should not just be heard—it should move you.
      </p>
      <div>
        <Button text="Aura Pro II" />
        <Button text="Flow II" />
      </div>
      <hr />
      <div>
        <a href="#">{/* Logo */}</a>
        <p>© 2025 Resonance. All rights reserved.</p>
        <ul>
          <li>
            <a href="#">{/* Media */}</a>
          </li>
          <li>
            <a href="#">{/* Media */}</a>
          </li>
          <li>
            <a href="#">{/* Media */}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
