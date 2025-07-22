import logo from "../../icons/logo.svg";
import { Button } from "../Button/Button";
export const Header = ({}) => {
  return (
    <header>
      <a href="#">
        <svg width="139" height="26">
          <use href={logo}></use>
        </svg>
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Tech Specs</a>
        </li>
      </ul>
      <Button text="Compare" isDark={true} />
    </header>
  );
};
