import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const projects = [
  {
    title: "Online Donation Platform through NGOs",
    description:
      "A secure donation platform connecting donors with NGOs, featuring authentication and real-time donation tracking.",
    images: [
      "donation1.jpg",
      "donation2.jpg",
      "donation3.jpg",
      "donation4.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Blog-Post",
    demo: "https://donate-link.netlify.app/",
  },
  {
    title: "Dabbal Tech Gazette",
    description:
      "A modern blogging platform with admin dashboard, profile management, and content creation tools.",
    images: [
      "debbal_tech_gazette__post.jpg",
      "debbal_tech_gazette_admin_dashboard.jpg",
      "debbal_tech_gazette_home.jpg",
      "debbal_tech_gazette_profile.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Blog-Post",
    demo: "https://blog-peach-three-24.vercel.app/",
  },
  {
    title: "TaskFlow – Task Management System",
    description:
      "An intuitive task management system with deadlines, priorities, and team collaboration features.",
    images: ["dashboard.jpg"],
    github: "https://github.com/Kuma-Leta/Task-management-system",
    demo: "https://taskflowmanage.netlify.app",
  },
  {
    title: "Sober Friendly Venues",
    description:
      "A community-driven platform to discover and share sober-friendly venues such as cafes, restaurants, and events.",
    images: ["sober1.jpg"],
    github: "https://github.com/Kuma-Leta/note_taking_web_app",
    demo: "https://sobervenues.netlify.app/",
  },
  {
    title: "Social Media Website",
    description:
      "A social platform with profiles, posts, likes, and real-time chat functionality.",
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
      "Property posting system with registration, user dashboard, and admin analytics.",
    images: [
      "brokerage_home.jpg",
      "brokerage_login.jpg",
      "brokerage_admin_dashboard_statistics.jpg",
      "brokerage_admin_dashboard.jpg",
    ],
    github: "https://github.com/Kuma-Leta/Web-Based-Brokerage-System",
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
    <section className=" dark:bg-gray-900 py-20 font-sans" id="projects">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2C2C2C] dark:text-white mb-16"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image Carousel */}
              <div className="relative">
                <img
                  src={project.images[currentImageIndex[index]]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(index)}
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-[#2C2C2C]/80 text-white p-2 rounded-full hover:bg-[#FF7A00] transition"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNext(index)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-[#2C2C2C]/80 text-white p-2 rounded-full hover:bg-[#FF7A00] transition"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2C2C] dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-5 flex space-x-4">
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-[#2C2C2C] text-white rounded-xl text-sm font-medium hover:bg-[#FF7A00] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="px-4 py-2 bg-[#FF7A00] text-white rounded-xl text-sm font-medium hover:bg-[#e86c00] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Kuma-Leta?tab=repositories"
            className="px-8 py-3 bg-[#FF7A00] text-white text-base font-semibold rounded-2xl shadow-lg hover:bg-[#e86c00] hover:shadow-orange-300/50 transition"
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
