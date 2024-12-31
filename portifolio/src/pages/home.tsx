import About from "../components/sections/about";
import Certifications from "../components/sections/certifications";
import Contact from "../components/sections/contact";
import Experience from "../components/sections/experience";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";
import Testimonials from "../components/sections/testimonials";
import { Helmet } from "react-helmet";
const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Kuma Leta - Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me through my contact form. Email me at kumaleta2021@gmail.com or visit me at https://linkedin.com/in/kumaleta"
        />
        <meta
          name="keywords"
          content="contact, email, social media, address, portfolio"
        />
        <meta name="author" content="Kuma Leta" />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
