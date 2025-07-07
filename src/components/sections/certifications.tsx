import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const certifications = [
  {
    title: "Node and Express Essentials",
    organization: "IBM",
    description:
      "Completed an in-depth curriculum covering RESTful API development, middleware, and backend logic using Node.js and Express.",
    image: "/coursera.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/H42BBN2YXVTM",
  },
  {
    title: "Programming Fundamentals",
    organization: "Udacity",
    description:
      "Gained a strong foundation in programming concepts including variables, loops, functions, and object-oriented principles.",
    image: "/programming fundamentals.jpg",
    link: "https://www.udacity.com/certificate/e/76503924-7750-11ef-bb7f-e3161a8aa99d",
  },
  {
    title: "ALX Virtual Assistant",
    organization: "ALX",
    description:
      "Trained in core virtual assistant tasks including calendar scheduling, email management, online research, and task prioritization.",
    image: "/VA_certificate.png",
    link: "https://intranet.alxswe.com/certificates/xXMGf7zmSN",
  },
  {
    title: "ALX Professional Foundations",
    organization: "ALX",
    description:
      "Built a robust understanding of JavaScript (ES6+), data structures, and problem-solving techniques through hands-on projects.",
    image: "/proffesional_foundation.png",
    link: "https://intranet.alxswe.com/certificates/Nz2ZBFPCmJ",
  },
  {
    title: "ALX AI Career Essentials",
    organization: "ALX",
    description:
      "Explored fundamental concepts of artificial intelligence, machine learning, and their real-world applications.",
    image: "/AICE.png",
    link: "https://intranet.alxswe.com/certificates/FXr6yBspMJ",
  },
  {
    title: "Internship Completion",
    organization: "Dabbal Software Development PLC",
    description:
      "Completed a backend-focused internship developing full-stack applications using Node.js, Express, MongoDB, and Git-based collaboration.",
    image: "/internship.png",
    link: "https://www.udemy.com/certificate/your-profile",
  },
];

interface Certificate {
  title: string;
  image: string;
  link: string;
  description: string;
  organization: string;
}
const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4"
          data-aos="fade-up"
        >
          Certifications
        </h2>
        <p
          className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12"
          data-aos="fade-up"
        >
          A collection of credentials I've earned in areas such as backend
          development, virtual assistance, and AI.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => openModal(cert)}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-300 font-medium mb-2">
                  {cert.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://drive.google.com/drive/u/0/folders/1zfU5A_Hdf7kU0eoj2OLQTAq4XVLgRrSK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            View More Certificates
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {selectedCert.title}
            </h3>
            <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-2">
              {selectedCert.organization}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedCert.description}
            </p>
            <a
              href={selectedCert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Verify Credential
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
