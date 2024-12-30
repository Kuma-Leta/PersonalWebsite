import About from "../components/sections/about";
import Certifications from "../components/sections/certifications";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";
import Testimonials from "../components/sections/testimonials";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Certifications />
    </div>
  );
};
export default Home;
