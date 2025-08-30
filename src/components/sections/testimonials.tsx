import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import AOS from "aos";

const testimonials = [
  {
    name: "Tokkumma Abdisa",
    role: "CEO @Quantumkit & Top Rated Full Stack Developer",
    company: "Fiverr",
    photo: "/tokkumma.jpg",
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
    role: "Full Stack Developer",
    company: "INSA",
    photo: "/firaol.jpg",
    text: "Kuma consistently delivers high-quality work. His ability to solve problems and create scalable solutions is impressive.",
  },
  {
    name: "Firaol Tesfaye",
    role: "UI/UX Designer & Mobile App Developer",
    company: "Arif Studio",
    photo: "/firaol-T.jpg",
    text: "Kuma is not just a great developer but also a fantastic team player. His collaborative spirit and technical expertise are outstanding.",
  },
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 dark:text-white py-20 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#FF7A00] mb-12"
          data-aos="fade-up"
        >
          Testimonials
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-[#FF7A00]/70 object-cover shadow-md"
                />
                <h3 className="text-lg font-bold text-[#2C2C2C] dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {testimonial.role} @ {testimonial.company}
                </p>
                <p className="italic text-gray-700 dark:text-gray-200 leading-relaxed">
                  “{testimonial.text}”
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
