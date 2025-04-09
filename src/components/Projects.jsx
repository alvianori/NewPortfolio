import React, { useState } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that shows current conditions and forecasts using weather API.",
    tech: ["React", "OpenWeather API", "ChartJS"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that shows current conditions and forecasts using weather API.",
    tech: ["React", "OpenWeather API", "ChartJS"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that shows current conditions and forecasts using weather API.",
    tech: ["React", "OpenWeather API", "ChartJS", "Hello"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that shows current conditions and forecasts using weather API.",
    tech: ["React", "OpenWeather API", "ChartJS"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that shows current conditions and forecasts using weather API.",
    tech: ["React", "OpenWeather API", "ChartJS"],
    image: "https://placehold.co/600x400",
    github: "https://github.com",
    live: "https://demo-link.com",
  },
];

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + PROJECTS_PER_PAGE);
  };

  const showLessProjects = () => {
    setVisibleProjects(PROJECTS_PER_PAGE);
  };

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
            Featured <span className="text-[#00ADB5]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ADB5] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#393E46] rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#00ADB5] bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#00ADB5] px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#00ADB5] px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#00ADB5] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          {visibleProjects < projectData.length ? (
            <button
              onClick={showMoreProjects}
              className="bg-[#00ADB5] text-white px-8 py-3 rounded-lg
                hover:bg-white hover:text-[#00ADB5] 
                transform hover:scale-105 transition-all duration-300"
            >
              Load More Projects
            </button>
          ) : visibleProjects > PROJECTS_PER_PAGE ? (
            <button
              onClick={showLessProjects}
              className="bg-white text-[#00ADB5] px-8 py-3 rounded-lg
                hover:bg-[#00ADB5] hover:text-white 
                transform hover:scale-105 transition-all duration-300"
            >
              Show Less
            </button>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
