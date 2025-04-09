import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-[#222831] py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-[#00ADB5]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ADB5] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Professional Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                As an 8th-semester Information Technology student, I've
                developed a comprehensive understanding of full-stack web
                development, with expertise in both frontend and backend
                technologies. I combine strong analytical skills with effective
                team collaboration to deliver efficient solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="space-y-2">
                  {[
                    "Problem Analysis",
                    "Project Management",
                    "Team Leadership",
                  ].map((skill, index) => (
                    <motion.p
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="font-medium"
                    >
                      <span className="text-[#00ADB5]">▹</span> {skill}
                    </motion.p>
                  ))}
                </div>
                <div className="space-y-2">
                  {["System Design", "Critical Thinking", "Communication"].map(
                    (skill, index) => (
                      <motion.p
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="font-medium"
                      >
                        <span className="text-[#00ADB5]">▹</span> {skill}
                      </motion.p>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-6 text-gray-300">
              {[
                {
                  school: "Universitas Negeri Yogyakarta",
                  degree: "Bachelor of Information Technology (2021 - Present)",
                  gpa: "GPA: 3.67",
                  courses:
                    "Key courses: Data Structures, Database Systems, Software Engineering, Web Development, Mobile Applications, AI, and Object-Oriented Development",
                },
                {
                  school: "Bangkit Academy",
                  degree: "Cloud Computing Path (Feb 2024 - June 2024)",
                  details: [
                    "12-week intensive program focused on Google Cloud Platform",
                    "Capstone Project: DERAS (Skin Disease Detection)",
                  ],
                },
                {
                  school: "Rakamin Academy",
                  degree: "Fullstack Web Developer (Aug 2023 - Dec 2023)",
                  details: [
                    "12-week intensive web development bootcamp",
                    "Final Project: Mini E-commerce Web Application",
                  ],
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  <h4 className="text-lg font-medium text-[#00ADB5]">
                    {edu.school}
                  </h4>
                  <p className="text-white font-medium">{edu.degree}</p>
                  {edu.gpa && <p className="italic">{edu.gpa}</p>}
                  {edu.courses && <p className="mt-2">{edu.courses}</p>}
                  {edu.details && (
                    <ul className="list-disc list-inside mt-2">
                      {edu.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
