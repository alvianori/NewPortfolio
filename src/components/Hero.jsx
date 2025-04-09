import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#222831] flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#00ADB5] font-medium mb-2"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-4"
          >
            Hi, I'm <span className="text-[#00ADB5]">Alvianori</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl lg:text-2xl text-white mb-4"
          >
            Fullstack Web Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-300 mb-8 max-w-lg"
          >
            I specialize in creating beautiful, responsive web applications
            using modern technologies. Let's work together to bring your ideas
            to life!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#00ADB5] text-white px-8 py-3 rounded-lg w-full sm:w-fit
                hover:bg-white hover:text-[#00ADB5] hover:shadow-lg
                transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              className="border-2 border-[#00ADB5] text-white px-8 py-3 rounded-lg w-full sm:w-fit
                hover:bg-[#00ADB5] hover:shadow-lg
                transform hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex gap-6 items-center justify-center lg:justify-start"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="__blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Blob with Masked Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.02, rotate: 2 }} // Reduced scale and rotation
          transition={{
            duration: 0.8, // Reduced duration
            delay: 0.1,
            type: "spring",
            stiffness: 200, // Increased stiffness for snappier animation
            damping: 20, // Added damping for better control
          }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="w-[450px] h-[450px] lg:w-[800px] lg:h-[800px] relative">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full mt-10 lg:mt-0"
            >
              <defs>
                <clipPath id="blob">
                  <path
                    d="M32.5,-59.6C43.5,-49.9,54.7,-44,57,-34.7C59.3,-25.4,52.6,-12.7,55.2,1.5C57.8,15.7,69.8,31.5,69.1,43.5C68.4,55.4,54.9,63.6,41.3,71.6C27.7,79.5,13.8,87.1,2,83.7C-9.9,80.3,-19.8,65.9,-32.4,57.4C-44.9,48.8,-60.1,46.2,-64.9,37.6C-69.7,29,-64,14.5,-62.6,0.8C-61.1,-12.8,-63.8,-25.6,-58.2,-32.7C-52.5,-39.8,-38.5,-41.1,-27.4,-50.7C-16.3,-60.3,-8.2,-78.1,1.3,-80.3C10.7,-82.6,21.5,-69.2,32.5,-59.6Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>

              {/* Shadow Blob */}
              <path
                fill="rgba(255, 255, 255, 0.1)"
                d="M32.5,-59.6C43.5,-49.9,54.7,-44,57,-34.7C59.3,-25.4,52.6,-12.7,55.2,1.5C57.8,15.7,69.8,31.5,69.1,43.5C68.4,55.4,54.9,63.6,41.3,71.6C27.7,79.5,13.8,87.1,2,83.7C-9.9,80.3,-19.8,65.9,-32.4,57.4C-44.9,48.8,-60.1,46.2,-64.9,37.6C-69.7,29,-64,14.5,-62.6,0.8C-61.1,-12.8,-63.8,-25.6,-58.2,-32.7C-52.5,-39.8,-38.5,-41.1,-27.4,-50.7C-16.3,-60.3,-8.2,-78.1,1.3,-80.3C10.7,-82.6,21.5,-69.2,32.5,-59.6Z"
                transform="translate(103 103)"
              />

              {/* Main Blob */}
              <path
                fill="#00ADB5"
                d="M32.5,-59.6C43.5,-49.9,54.7,-44,57,-34.7C59.3,-25.4,52.6,-12.7,55.2,1.5C57.8,15.7,69.8,31.5,69.1,43.5C68.4,55.4,54.9,63.6,41.3,71.6C27.7,79.5,13.8,87.1,2,83.7C-9.9,80.3,-19.8,65.9,-32.4,57.4C-44.9,48.8,-60.1,46.2,-64.9,37.6C-69.7,29,-64,14.5,-62.6,0.8C-61.1,-12.8,-63.8,-25.6,-58.2,-32.7C-52.5,-39.8,-38.5,-41.1,-27.4,-50.7C-16.3,-60.3,-8.2,-78.1,1.3,-80.3C10.7,-82.6,21.5,-69.2,32.5,-59.6Z"
                transform="translate(100 100)"
              />

              {/* Masked Image */}
              <image
                href="/saya1.png"
                x="25"
                y="35"
                width="150"
                height="150"
                clipPath="url(#blob)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
