import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact: React.FC = () => {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        service_id,
        template_id,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(true);
      setSuccess(false);
      console.error("Failed to send email:", err);
    }

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 5000);
  };

  return (
    <section id="contact" className="font-serif  dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          Have a project idea or just want to say hello? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Form */}
          <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>

              {/* Feedback */}
              {success && (
                <p className="text-green-600 mt-4 transition-opacity">
                  ✅ Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-500 mt-4 transition-opacity">
                  ❌ Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <i className="fas fa-envelope text-orange-500 text-2xl mb-2"></i>
              <p className="text-gray-700 dark:text-gray-300">
                kumaleta2021@gmail.com
              </p>
            </div>
            <div className="mb-6">
              <i className="fas fa-map-marker-alt text-orange-500 text-2xl mb-2"></i>
              <p className="text-gray-700 dark:text-gray-300">
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/kumaleta"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-linkedin text-blue-600 text-2xl"></i>
              </a>
              <a
                href="https://t.me/Kuma_Leta"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-telegram text-sky-500 text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
