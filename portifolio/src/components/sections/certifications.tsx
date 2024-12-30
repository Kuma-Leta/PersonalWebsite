import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

// Certification data with image and link
const certifications = [
  {
    title: "Node And Express Essentials",
    organization: "IBM",
    description:
      "Completed a comprehensive curriculum covering  back-end development.",
    image: "/coursera.jpg", // Certification image
    link: "https://www.coursera.org/account/accomplishments/verify/H42BBN2YXVTM", // Handle for credential verification
  },
  {
    title: "Programming Fundamentals",
    organization: "Udacity",
    description: "Learned programming fundamentals in web programming.",
    image: "/programming fundamentals.jpg", // Certification image
    link: "https://www.udacity.com/certificate/e/76503924-7750-11ef-bb7f-e3161a8aa99d", // Handle for credential verification
  },
  {
    title: "ALX Virtual Assistant",
    organization: "ALX",
    description:
      "Mastered main services of virtual assistance such as calendar management ,email inbox management,web research.",
    image: "/VA_certificate.png", // Certification image
    link: "https://intranet.alxswe.com/certificates/xXMGf7zmSN", // Handle for credential verification
  },
  {
    title: "ALX Proffessional Foundation",
    organization: "ALX",
    description:
      "Gained a solid foundation in JavaScript, including ES6, algorithms, and data structures.",
    image: "/proffesional_foundation.png", // Certification image
    link: "https://intranet.alxswe.com/certificates/Nz2ZBFPCmJ", // Handle for credential verification
  },

  {
    title: "ALX AI career Essentials",
    organization: "ALX",
    description: "Deep dived into Artificial Intelligence.",
    image: "/AICE.png", // Certification image
    link: "https://intranet.alxswe.com/certificates/FXr6yBspMJ", // Handle for credential verification
  },
  {
    title: "Node.js & Express",
    organization: "Udemy",
    description:
      "Deep dive into backend development using Node.js, Express, and MongoDB for full-stack applications.",
    image: "/internship.png", // Certification image
    link: "https://www.udemy.com/certificate/your-profile", // Handle for credential verification
  },
];

const Certifications: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-light dark:bg-dark py-12">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-6 text-center text-dark dark:text-light"
          data-aos="fade-up"
        >
          Certifications
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-300 mb-12"
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
              <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">
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
