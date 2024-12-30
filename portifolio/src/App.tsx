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
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
