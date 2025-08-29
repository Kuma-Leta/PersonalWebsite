import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 font-sans" id="about">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] dark:text-white leading-tight">
            About Me
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Hello! I’m{" "}
            <span className="font-semibold text-[#FF7A00]">Kuma Leta Keba</span>
            , a passionate software engineer with a strong foundation in
            full-stack web development. With over 3 years of experience through
            internships and personal projects, I specialize in creating
            efficient, scalable web applications and user-friendly interfaces.
          </p>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            My journey in technology began with a curiosity to understand how
            systems work and a desire to solve real-world problems. Over the
            years, I’ve worked on diverse projects, from developing web
            applications to contributing to innovative solutions. These
            experiences have shaped me into a professional who thrives in
            dynamic and challenging environments.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block px-6 py-3 bg-[#FF7A00] text-white text-base font-semibold rounded-2xl shadow-lg hover:bg-[#e86c00] hover:shadow-orange-300/50 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Column - Image */}
        <div
          className="lg:w-1/2 flex justify-center relative"
          data-aos="fade-up"
        >
          {/* Orange Aura Effect */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#FF7A00]/20 rounded-full blur-3xl"></div>
          <img
            src={"/Programming.gif"}
            alt="Kuma Leta"
            className="rounded-2xl shadow-2xl border-4 border-[#FF7A00]/70 lg:w-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
