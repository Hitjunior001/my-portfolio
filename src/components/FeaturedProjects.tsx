import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectDescriptions = [
  {
    title: "PlayerFinder",
    description:
      "PlayerFinder is a project developed with Java for the backend and ReactJS for the frontend. It utilizes modern technologies such as Spring Boot, Tailwind CSS, and Firebase for real-time database management and user authentication. The application connects players based on their skill levels and game preferences, helping them find teammates or opponents for various games.",
    technologies: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "Tailwind CSS",
      "Firebase",
    ],
    githubLink: "https://github.com/Hitjunior001/PlayerFinder-Ceub-",

  },
  {
    title: "Cooperative Member Management System",
    description:
      "A web-based system for managing cooperative members, designed to help organize and track member contributions, profiles, and interactions. The system uses advanced filtering to search for members based on specific skills, qualifications, and contributions. It supports roles like members, administrators, and coordinators, providing a user-friendly interface for seamless management.",
    technologies: ["Spring Boot", "MySQL", "Thymeleaf", "Java", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Hitjunior001/Sistema_Cooperados/",
  },
  {
    title: "Cooperative Member Management",
    description:
      "A back-end application developed in Node.js designed for managing cooperative members in a database. This project aims to provide an efficient and scalable solution to organize and maintain information about members of a financial institution. It offers real-time data management and filtering capabilities, providing a user-friendly interface for administrators and coordinators to track member contributions, profiles, and activities.",
    technologies: ["Node.js", "ReactJS", "EJS", "MySQL", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Hitjunior001/cooperX",
    
  },
];


export default function FeaturedProjects({buttonFixedBugs} : { buttonFixedBugs: boolean }) {
  return (
    
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-12 relative z-10 rounded-2xl p-10 shadow-2xl "
    >
      <h2 className={`text-4xl font-bold text-center text-green-400 drop-shadow-lg ${!buttonFixedBugs ? "animate-flicker" : ""}`}>
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projectDescriptions.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-4 group">
              <h3 className={`text-xl font-semibold text-white ${!buttonFixedBugs ? "glitch-text" : ""}`}>{project.title}</h3>
              
              <p className="text-sm text-gray-400 mt-2 group-hover:text-white">
                {project.description}
              </p>

              <div className="mt-4">
                <h4 className="text-md text-green-400">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}