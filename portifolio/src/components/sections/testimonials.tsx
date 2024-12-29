import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import AOS from "aos";
// For Pagination module

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    company: "TechCorp",
    photo: "/myPhoto.png",
    text: "Kuma is an exceptional developer who brings passion and innovation to every project. His dedication and skill set make him a valuable asset to any team.",
  },
  {
    name: "Abdurezak Yisihak",
    role: "CTO",
    company: "Dabbal Software Development PLC",
    photo: "/abdu.jpg",
    text: "Working with Kuma was a pleasure. His professionalism and attention to detail are truly commendable. I highly recommend him.",
  },
  {
    name: "Firaol Anbessa",
    role: "CTO",
    company: "NextGen Tech",
    photo: "/firaol.jpg",
    text: "Kuma consistently delivers high-quality work. His ability to solve problems and create scalable solutions is impressive.",
  },
  {
    name: "Lisa Wong",
    role: "Team Lead",
    company: "DevWorks",
    photo: "/lisa.jpg",
    text: "Kuma is not just a great developer but also a fantastic team player. His collaborative spirit and technical expertise are outstanding.",
  },
  {
    name: "Tom Brown",
    role: "Software Engineer",
    company: "CodeCraft",
    photo: "/tom.jpg",
    text: "Kuma’s dedication and skill level set him apart. He has a knack for understanding complex requirements and delivering elegant solutions.",
  },
  // Add more testimonials here...
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className="bg-light dark:bg-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">
          Testimonials
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-200">
                  "{testimonial.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
