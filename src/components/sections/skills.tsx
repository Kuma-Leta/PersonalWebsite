import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const skills = {
  frontend: [
    { name: "React", logo: "/react.png" },
    { name: "Redux", logo: "/redux.png" },
    { name: "JavaScript", logo: "/javascript.png" },
    { name: "TypeScript", logo: "/typescript.png" },
    { name: "TailwindCSS", logo: "/tailwindcss.png" },
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
  ],
  backend: [
    { name: "Node.js", logo: "/node.png" },
    { name: "Express", logo: "/express.png" },
    { name: "MongoDB", logo: "/mongo.png" },
    { name: "Nextjs", logo: "/nextjs.png" },
    { name: "MySQL", logo: "/mysql.png" },
  ],
  tools: [
    { name: "Git", logo: "/git.png" },
    { name: "GitHub", logo: "/github.png" },
    { name: "Agile", logo: "/agile.jpg" },
  ],
};

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 font-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2C2C2C] dark:text-white mb-6"
          data-aos="fade-up"
        >
          Technologies & Tools I Work With
        </h2>
        <p
          className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          Here are the technologies and tools I use to build scalable,
          efficient, and user-friendly solutions.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#FF7A00] mb-6 capitalize text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center transition transform hover:scale-105"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-[#FF7A00]/10 rounded-full shadow-md hover:shadow-orange-300/50 p-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 font-medium text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
