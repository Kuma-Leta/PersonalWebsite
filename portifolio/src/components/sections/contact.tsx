import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // EmailJS or form submission logic here
    // Simulating success
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="bg-gray-100 dark:bg-dark py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
              >
                Send Message
              </button>
              {success && (
                <p className="text-green-500 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <i className="fas fa-envelope text-primary text-2xl mb-2"></i>
              <p className="text-gray-700 dark:text-gray-300">
                kumaleta2021@gmail.com
              </p>
            </div>
            <div className="mb-6">
              <i className="fas fa-map-marker-alt text-primary text-2xl mb-2"></i>
              <p className="text-gray-700 dark:text-gray-300">
                jimma, Ethiopia
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/kumaleta"
                className="text-primary text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/khky1" className="text-primary text-2xl">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
