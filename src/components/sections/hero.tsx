import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero: React.FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-gray-100 dark:bg-gray-900">
      {/* Gradient Waves */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>

      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white shadow-md">
            Hi, I’m <span className="text-blue-500">Kuma Leta</span>, a
            Passionate Full-Stack Software Engineer.
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            I specialize in building scalable web applications.
          </p>
          <div className="mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href={"/Kuma_Leta_FullStack_Developer.pdf"}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Download My Resume
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="https://github.com/Kuma-Leta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl text-gray-900 dark:text-white"></i>
            </a>
            <a
              href="https://linkedin.com/in/kumaleta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl text-gray-900 dark:text-white"></i>
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={"/ma-photo.png"}
            alt="kuma Leta"
            className="rounded-lg shadow-lg border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
