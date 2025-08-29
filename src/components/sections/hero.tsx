import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero: React.FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* Decorative Gradient Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-white to-orange-50 opacity-40"></div>

      <div className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I’m{" "}
            <span className="text-[#FF7A00] drop-shadow-md">Kuma Leta</span>, a
            Passionate Full-Stack Software Engineer.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            I specialize in building scalable and user-friendly web applications
            with modern technologies. Let’s turn ideas into impactful digital
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={"/Kuma_Leta_FullStack_Developer.pdf"}
              className="px-6 py-3 bg-[#FF7A00] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e86c00] hover:shadow-orange-300/50 transition"
            >
              Download My Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-[#FF7A00] text-[#FF7A00] font-semibold rounded-2xl hover:bg-[#FF7A00] hover:text-white transition"
            >
              View My Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/Kuma-Leta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-[#FF7A00] transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/kumaleta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-[#FF7A00] transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="lg:w-1/2 flex justify-center relative" data-aos="fade-left">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF7A00]/20 rounded-full blur-3xl"></div>
          <img
            src={"/profile_picture.jpg"}
            alt="Kuma Leta"
            className="rounded-2xl shadow-2xl border-4 border-[#FF7A00]/70"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
