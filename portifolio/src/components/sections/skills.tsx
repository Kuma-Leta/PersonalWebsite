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
  ],
  tools: [
    { name: "Git", logo: "/git.png" },
    { name: "GitHub", logo: "/github.png" },
    { name: "Agile", logo: "/agile.jpg" },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          Technologies & Tools I Work With
        </h2>
        <p
          className="text-center text-gray-600 dark:text-black-300 mb-12 dark:text-white"
          data-aos="fade-up"
        >
          Here are the technologies and tools I use to build scalable,
          efficient, and user-friendly solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              data-aos="slide-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize text-gray-700 dark:text-gray-200">
                {category}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {items.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-20 h-20 object-contain mb-2"
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-200">
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
