import { Button } from "../Button/Button";
export const Header = ({}) => {
  return (
    <header>
      <a href="#">{/* Logo */}</a>
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
