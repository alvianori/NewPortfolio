import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiPostman,
} from "react-icons/si";

const skillsData = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "RESTful API", icon: SiPostman, color: "#FF6C37" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-[#222831] py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-[#00ADB5]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ADB5] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#393E46] p-8 sm:p-12 rounded-xl max-w-7xl mx-auto" // Increased max-width
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            {" "}
            {/* Updated grid columns and gap */}
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-3"
              >
                <skill.icon
                  className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" // Adjusted icon sizes for different breakpoints
                  style={{ color: skill.color }}
                />
                <span className="text-white text-sm sm:text-base lg:text-lg text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
