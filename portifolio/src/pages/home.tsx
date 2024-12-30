import About from "../components/sections/about";
import Certifications from "../components/sections/certifications";
import Experience from "../components/sections/experience";
import Footer from "../components/sections/footer";
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
      <Experience />
      <Testimonials />
      <Certifications />
      <Footer />
    </div>
  );
};
export default Home;
