import About from "./components/about_component/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/project/Projects";
import Services from "./components/services/Services";
import Testimonials from "./components/Testimonials";
import ThemeToggleButton from "./components/ThemToggleButton";

const page = () => {
  return (
    <>
      <ThemeToggleButton />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default page;
