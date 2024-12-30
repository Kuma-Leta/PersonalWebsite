import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const certifications = [
  {
    title: "Node And Express Essentials",
    organization: "IBM",
    description:
      "Completed a comprehensive curriculum covering  back-end development.",
    image: "/coursera.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/H42BBN2YXVTM",
  },
  {
    title: "Programming Fundamentals",
    organization: "Udacity",
    description: "Learned programming fundamentals in web programming.",
    image: "/programming fundamentals.jpg",
    link: "https://www.udacity.com/certificate/e/76503924-7750-11ef-bb7f-e3161a8aa99d",
  },
  {
    title: "ALX Virtual Assistant",
    organization: "ALX",
    description:
      "Mastered main services of virtual assistance such as calendar management ,email inbox management,web research.",
    image: "/VA_certificate.png",
    link: "https://intranet.alxswe.com/certificates/xXMGf7zmSN",
  },
  {
    title: "ALX Proffessional Foundation",
    organization: "ALX",
    description:
      "Gained a solid foundation in JavaScript, including ES6, algorithms, and data structures.",
    image: "/proffesional_foundation.png",
    link: "https://intranet.alxswe.com/certificates/Nz2ZBFPCmJ",
  },

  {
    title: "ALX AI career Essentials",
    organization: "ALX",
    description: "Deep dived into Artificial Intelligence.",
    image: "/AICE.png",
    link: "https://intranet.alxswe.com/certificates/FXr6yBspMJ",
  },
  {
    title: "Internship completion",
    organization: "Dabbal Software Development PLC",
    description:
      "Deep dive into backend development using Node.js, Express, and MongoDB for full-stack applications.",
    image: "/internship.png",
    link: "https://www.udemy.com/certificate/your-profile",
  },
];

const Certifications: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-6 text-center text-lg text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
        >
          Certifications
        </h2>
        <p
          className="text-center  text-gray-700 dark:text-gray-300 mb-12"
          data-aos="fade-up"
        >
          Here are some of the certifications I’ve earned to strengthen my
          skills and knowledge in the field of software engineering and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              data-aos="slide-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {cert.organization}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
