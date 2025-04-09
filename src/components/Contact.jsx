import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-[#222831] py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="text-[#00ADB5]">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-[#00ADB5] rounded-2xl transform -rotate-2"></div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#393E46] p-8 md:p-12 rounded-2xl relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <p className="text-gray-300 mb-8">
                    I'm open for any suggestion or just to have a chat
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ADB5] transition-colors"
                  >
                    <FaEnvelope className="text-2xl" />
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p>Alvianorck@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ADB5] transition-colors"
                  >
                    <FaPhone className="text-2xl" />
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p>+62 877 6748 8301</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ADB5] transition-colors"
                  >
                    <FaMapMarkerAlt className="text-2xl" />
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p>Klaten, Central Java</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="text-white font-medium mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="text-gray-300 hover:text-[#00ADB5] text-2xl"
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="text-gray-300 hover:text-[#00ADB5] text-2xl"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="text-gray-300 hover:text-[#00ADB5] text-2xl"
                    >
                      <FaInstagram />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#222831] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#222831] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#222831] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-[#222831] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all resize-none"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg transition-all duration-300 font-medium text-lg
                      ${
                        isSubmitting
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-[#00ADB5] hover:bg-[#00ADB5]/90"
                      } 
                      text-white`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-400 text-center mt-4"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-center mt-4"
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
