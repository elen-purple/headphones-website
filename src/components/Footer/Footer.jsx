import logo from "../../icons/logo.svg";
import discord from "../../icons/discord.svg";
import x from "../../icons/x.svg";
import meta from "../../icons/meta.svg";
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
        <a href="#">
          <svg width="139" height="26">
            <use href={logo}></use>
          </svg>
        </a>
        <p>© 2025 Resonance. All rights reserved.</p>
        <ul>
          <li>
            <a href="#">
              <svg width="26" height="26">
                <use href={discord}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="26" height="26">
                <use href={x}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="26" height="26">
                <use href={meta}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
