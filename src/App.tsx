import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import "./index.css"
import ContactSection from './components/ContactSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechnologiesSection from './components/TechnologiesSection';

const typeWriterEffect = (text: string, delay = 60) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(typedText + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typedText, delay]);

  return typedText;
};

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => setShowMessage(!showMessage);

  const nameText = "Reginaldo de Oliveira";
  const roleText = "Fullstack Developer & Data Analyst";
  const typedSummary = "Former intern at Caixa Econômica, with hands-on experience in web development, database management, and agile methodologies (Scrum). Passionate about building scalable systems and optimizing data analysis for business insights.";

  const typedName = typeWriterEffect(nameText + '.', 50);
  const typedRole = typeWriterEffect(roleText, 20);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-green-400 font-mono px-6 py-12 space-y-24 overflow-hidden">

      <motion.section
        className="text-center relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex-1 text-left">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 }}
          >
            <span className="text-green-300 animate-flicker delay-200">{typedName}</span>
          </motion.h1>
          <motion.p
            className="text-3xl mt-4 text-green-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {typedRole}
          </motion.p>
          <motion.p
            className="text-xl mt-4 text-gray-400"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {typedSummary}
          </motion.p>
        </div>

        <div className="flex-1 text-right">
          <motion.p
            className="text-lg text-gray-400 animated-flicker"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experienced in banking systems, fullstack development, and scalable solutions. Former Caixa Econômica developer. Expertise in Scrum for efficient project delivery.
          </motion.p>
        </div>
      </motion.section>

      <TechnologiesSection/>


      <FeaturedProjects />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-bold text-green-500">Special Message</h2>

        <motion.button
          onClick={toggleMessage}
          className="text-2xl font-semibold text-white bg-green-500 hover:bg-green-600 border-4 border-green-600 rounded-lg px-8 py-3 transition-all duration-300 transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Show Message
        </motion.button>

        {showMessage && (
          <motion.p
            className="text-xl font-semibold text-gray-300 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            "The only way to do great work is to love what you do" - Steve Jobs
          </motion.p>
        )}
      </motion.section>

      <ContactSection />

    </div>
  );
}
