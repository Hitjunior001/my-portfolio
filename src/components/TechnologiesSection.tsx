import { motion } from 'framer-motion';
import { FaAngular, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiFirebase, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiPython, SiApache } from 'react-icons/si';

const techs = [
  { icon: <FaReact />, label: 'ReactJS' },
  { icon: <FaNodeJs />, label: 'NodeJS' },
  { icon: <FaAngular />, label: 'AngularJS' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <SiSpringboot />, label: 'Spring Boot' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiPython />, label: 'Python' },
  { icon: <SiApache />, label: 'Apache' },
];

export default function TechnologiesSection({buttonFixedBugs} : { buttonFixedBugs: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-12 relative z-10 py-16 px-6 rounded-2xl shadow-2xl"
    >
      <h2 className={`text-3xl font-bold text-center text-green-500 ${!buttonFixedBugs ? "animate-flicker" : ""}`}>
        Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`group flex flex-col items-center justify-center bg-gray-800 rounded-xl p-5 text-center shadow-md hover:shadow-green-400 transition-all duration-300 cursor-pointer ${!buttonFixedBugs ? "animate-flicker" : ""}`}
          >
            <div className="text-4xl text-green-300 mb-2 group-hover:text-white transition">
              {tech.icon}
            </div>
            <span className={`text-sm font-semibold text-gray-200 group-hover:text-green-300 transition ${!buttonFixedBugs ? "glitch-text" : ""} delay-5000`}>
              {tech.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
