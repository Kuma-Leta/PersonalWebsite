import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16" id="about">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2" data-aos="slide-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-gray-700 text-justify dark:text-gray-300">
            Hello! I’m Kuma Leta Keba, a passionate software engineering with a
            strong foundation in full-stack web development. With over 3 years
            of experience through internships and personal projects, I
            specialize in creating efficient, scalable web applications and
            user-friendly interfaces.
          </p>
          <p className="mt-4 text-gray-700 text-justify dark:text-gray-300">
            My journey in technology began with a curiosity to understand how
            systems work and a desire to solve real-world problems. Over the
            years, I’ve worked on diverse projects, from developing web
            applications to contributing to innovative solutions . These
            experiences have shaped me into a professional who thrives in
            dynamic and challenging environments.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg  text-center justify-center shadow-lg hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2 flex justify-center" data-aos="slide-up">
          <img
            src={"/developer.png"}
            alt="Kuma Leta"
            className="rounded-lg shadow-lg border-4 lg:w-2/3 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
