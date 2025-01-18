import FAQSection from "./components/Faq";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "the ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <FAQSection />
    </>
  );
};

export default About;
