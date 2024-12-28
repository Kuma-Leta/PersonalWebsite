import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};
export default Home;
