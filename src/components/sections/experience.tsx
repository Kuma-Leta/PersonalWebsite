import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const experience = [
  {
    jobTitle: "Full-Stack Developer Intern",
    companyName: "Dabbal Software Development PLC",
    duration: "Feb 2024 - Present",
    description: [
      "Designed schema and implemented backend logic for scalable applications.",
      "Integrated databases using MongoDB, ensuring efficient data retrieval and security.",
      "Collaborated with the frontend team to customize APIs based on business needs.",
      "Debugged and optimized the system for performance improvements.",
    ],
    achievements: [
      "Developed 'Dabbal Tech Gazette,' a blog platform for community knowledge sharing.",
      "Gained hands-on experience with modern technologies like TypeScript, TailwindCSS, Git, and GitHub.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Git",
      "GitHub",
      "TailwindCSS",
      "React",
      "Express.js",
    ],
    logoLight: "/dabbal.jpg",
    logoDark: "/dabbal.jpg",
  },
  {
    jobTitle: "Backend Developer Intern",
    companyName: "Marvels Creative Technology",
    duration: "Feb 2024 - Present",
    description: [
      "Contributed to the development of the Marvel Job Portal by building scalable backend APIs.",
      "Designed and implemented RESTful APIs to support job listings, user authentication, and application workflows.",
      "Integrated backend services with frontend components in a collaborative team environment.",
      "Participated in agile ceremonies including sprint planning and daily stand-ups.",
      "Wrote unit tests and helped identify and fix bugs to improve system reliability.",
    ],
    achievements: [
      "Successfully contributed to real-world client projects under tight deadlines.",
      "Improved code quality and readability by refactoring existing backend modules.",
    ],
    technologies: [
      "MySQL",
      "Git",
      "Postman",
      "Next.js",
      "TypeScript",
      "REST API",
    ],
    logoDark: "/marvels.webp",
    logoLight: "/marvelsLight.webp",
  },
];

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-900 py-20 font-sans"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2C2C2C] dark:text-white mb-6"
          data-aos="fade-up"
        >
          Experience
        </h2>
        <p
          className="text-center text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          Discover the roles I've taken on, the challenges I've tackled, and the
          technologies I've mastered.
        </p>

        {/* Experience Timeline */}
        <div className="relative">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-16 gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Company Logo */}
                <div className="md:w-1/3  flex justify-center">
                  <img
                    src={exp.logoLight}
                    alt={`${exp.companyName} logo`}
                    className="w-48 h-48 bg-black object-contain dark:hidden rounded-full shadow-md"
                  />
                  <img
                    src={exp.logoDark}
                    alt={`${exp.companyName} logo`}
                    className="w-48 h-48 object-contain hidden dark:block rounded-full shadow-md"
                  />
                </div>

                {/* Experience Card */}
                <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-[#FF7A00]">
                    {exp.jobTitle}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    <strong>{exp.companyName}</strong> | {exp.duration}
                  </p>

                  {/* Description */}
                  <ul className="list-disc pl-5 mt-4 text-gray-600 dark:text-gray-200 space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  <h4 className="text-lg dark:text-white font-semibold mt-6">
                    Key Achievements
                  </h4>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-200 space-y-1">
                    {exp.achievements.map((achieve, idx) => (
                      <li key={idx}>{achieve}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <h4 className="text-lg dark:text-white font-semibold mt-6">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#FF7A00]/20 text-[#2C2C2C] dark:text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
