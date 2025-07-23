import { Button } from "../../../components/Button/Button";
import styles from "./Sound.module.scss";
import { Container } from "../../../components/Container/Container";
export const Sound = () => {
  return (
    <section className={styles.sound}>
      <Container>
        <h2 className={styles.sound__title}>Dreamlike Sound</h2>
        <p className={styles.sound__desc}>Starting at $320 — Available Now.</p>
        <Button text="Buy Now" />
      </Container>
    </section>
  );
};
