import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const experience = [
  {
    jobTitle: "Full-Stack Developer Intern",
    companyName: "Dabbal Software Development PLC",
    duration: "feb 2024 - present",
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
    duration: "Feb 2024 - present",
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
    logoDark: "/marvels.webp", // You can replace this with the actual logo path
    logoLight: "/marvelsLight.webp", // You can replace this with the actual logo path
    // logoLight: "/marvelsLight.webp",
  },
];

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="bg-gray-100 font-serif dark:bg-gray-900 dark:text-white py-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">
          Experience
        </h2>
        <p
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12"
          data-aos="fade-up"
        >
          Discover the roles I've taken on, the challenges I've tackled, and the
          technologies I've mastered.
        </p>
        <div className="relative">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 mb-12"
              data-aos="slide-up"
              data-aos-delay={index * 100}
            >
              <div className="md:w-1/3 bg-black p-3  dark:bg-transparent flex justify-center">
                <>
                  <img
                    src={exp.logoLight}
                    alt={`${exp.companyName} logo light`}
                    className="w-48 h-48 object-contain dark:hidden "
                  />
                  <img
                    src={exp.logoDark}
                    alt={`${exp.companyName} logo dark`}
                    className="w-48 h-48  object-contain hidden dark:block"
                  />
                </>
              </div>
              <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{exp.jobTitle}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>{exp.companyName}</strong> | {exp.duration}
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-white opacity-0.8 mt-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mt-4">Key Achievements</h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-white mt-2">
                  {exp.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul>
                <h4 className="text-lg  font-semibold mt-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary dark:text-white text-black rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
