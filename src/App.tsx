import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/hero";
import Header from "./components/sections/header";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Footer from "./components/sections/footer";
import Experience from "./components/sections/experience";
import Contact from "./components/sections/contact";
import Home from "./pages/home";
import "./styles/styles.css";
import Testimonials from "./components/sections/testimonials";
import Certifications from "./components/sections/certifications";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <>
      {" "}
      <HelmetProvider>
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
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
