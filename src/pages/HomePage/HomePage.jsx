import { Header } from "../../components/Header/Header";
import { Hero } from "./Hero/Hero";
import { Color } from "./Color/Color";
import { Benefits } from "./Benefits/Benefits";
import { Details } from "./Details/Details";
import { Sound } from "./Sound/Sound";
import { Footer } from "../../components/Footer/Footer";
export const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Color />
        <Benefits />
        <Details />
        <Sound />
      </main>
      <Footer />
    </>
  );
};
