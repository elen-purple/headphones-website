export const Button = ({ text, isDark = false }) => {
  return (
    <a data-dark={isDark} href="#">
      {text}
    </a>
  );
};
