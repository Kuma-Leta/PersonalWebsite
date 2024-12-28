import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};
export default Home;
