import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useState } from "react";
const projects = [
  {
    title: "Dabbal Tech Gazette",
    description:
      "Blogging platform with user authentication, content creation, and commenting features.",
    images: [
      "debbal_tech_gazette__post.jpg",
      "debbal_tech_gazette_admin_dashboard.jpg",
      "debbal_tech_gazette_home.jpg",
      "debbal_tech_gazette_profile.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Blog-Post",
  },
  {
    title: "Social Media Website",
    description: "Social platform with profiles, posts, likes, and comments.",
    images: [
      "blog_landingPage.jpg",
      "blog_login.jpg",
      "blog_home.jpg",
      "blog_chat.jpg",
      "blog_authorProfile.jpg",
    ],
    github: "https://github.com/Kuma-Leta/simple-social-media-website",
  },
  {
    title: "Web-Based Brokerage System",
    description:
      "Property posting system with registration and admin dashboard.",
    images: [
      "brokerage_home.jpg",
      "brokerage_login.jpg",
      "brokerage_admin_dashboard_statistics.jpg",
      "brokerage_admin_dashboard.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Web-Based-Brokerage-System",
  },
  {
    title: "Note-Taking Web App",
    description: "Web app for creating, editing, and managing personal notes.",
    images: [
      "note_taking_home.jpg",
      "note_taking_login.jpg",
      "note_taking_edit_notes.jpg",
      "note_taking_add_notes.jpg",
    ],
    github: "https://github.com/Kuma-Leta/note_taking_web_app",
  },
  {
    title: "Ethio Agri Farming System",
    description:
      "Supports farmers with weather updates, advisory services, and local language .",
    images: [
      "ethio_agri_home.jpg",
      "ethio_agri_login.jpg",
      "ethio_agri_landing_page.jpg",
      "ethio_agri_register.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Ethio-Agri-farming-system",
  },
];

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    projects.map(() => 0)
  );
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const handlePrev = (projectIndex: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((index, idx) =>
        idx === projectIndex
          ? index === 0
            ? projects[projectIndex].images.length - 1
            : index - 1
          : index
      )
    );
  };

  const handleNext = (projectIndex: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((index, idx) =>
        idx === projectIndex
          ? index === projects[projectIndex].images.length - 1
            ? 0
            : index + 1
          : index
      )
    );
  };
  return (
    <section
      className="bg-gray-100 font-serif dark:bg-gray-900 py-16"
      id="projects"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              data-aos="slide-up"
            >
              <div className="relative">
                <img
                  src={project.images[currentImageIndex[index]]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-40 object-cover"
                />
                <button
                  onClick={() => handlePrev(index)}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg hover:bg-gray-700"
                >
                  &lt;
                </button>
                <button
                  onClick={() => handleNext(index)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg hover:bg-gray-700"
                >
                  &gt;
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 text-base  dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  className="inline-block mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Kuma-Leta?tab=repositories"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
