import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBug, FaSpinner } from 'react-icons/fa';
import "./index.css"
import ContactSection from './components/ContactSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechnologiesSection from './components/TechnologiesSection';
import useTypeWriterEffect from './utils/useTypeWriterEffect';
import { useFlickerEffect } from './utils/useFlickerEffect';



export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonFixedBugs, setButtonFixedBugs] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(true);
  const [showFixPopup, setShowFixPopup] = useState(false);
  const [showFixButton, setShowFixButton] = useState(false);

  const [isLoadingFix, setIsLoadingFix] = useState(false);
  const [hasUsedFixButton, setHasUsedFixButton] = useState(false);


  const toggleMessage = () => setShowMessage(!showMessage);

  const handleFixBugs = () => {
    setIsLoadingFix(true);
    setTimeout(() => {
      const fixed = !buttonFixedBugs;
      setButtonFixedBugs(fixed);
      setIsLoadingFix(false);
      if (fixed) {
        setShowInitialPopup(false);
        setShowFixPopup(true);
        setTimeout(() => setShowFixPopup(false), 4000);
      } else {
        setShowInitialPopup(true);
      }
      setHasUsedFixButton(true);

    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollTop >= fullHeight - 50) {
        setShowFixButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nameText = "Reginaldo de Oliveira";
  const roleText = "Fullstack Developer & Data Analyst";
  const resumeText = "Former intern at Caixa Econômica, with hands-on experience in web development, database management, and agile methodologies (Scrum). Passionate about building scalable systems and optimizing data analysis for business insights.";
  const summaryText = "Experienced in banking systems, fullstack development, and scalable solutions. Former Caixa Econômica developer. Expertise in Scrum for efficient project delivery.";

  const typedName = useTypeWriterEffect({ text: nameText, delay: 60 });
  const typedRole = useTypeWriterEffect({ text: roleText, delay: 20 });

  const flickerName = useFlickerEffect();
  const flickerRole = useFlickerEffect();
  const flickerResume = useFlickerEffect();
  const flickerSummary = useFlickerEffect();

  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-green-400 font-mono px-6 py-12 space-y-24 overflow-hidden">

      {showInitialPopup && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-yellow-900 text-yellow-300 border border-yellow-500 px-6 py-3 rounded-lg z-[9999] shadow-lg flex flex-col ">
          ⚠️ This site is full of bugs. Scroll down and try to fix it.
          <button onClick={() => setShowInitialPopup(false)} className="mt-2 underline text-sm hover:text-yellow-800 pointer">
            Ok, got it!
          </button>
        </motion.div>

      )}

      {showFixPopup && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-800 text-green-100 border border-green-400 px-6 py-3 rounded-lg z-[9999] shadow-lg">
          ✅ Bugs fixed successfully!
        </motion.div>
      )}
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
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span {...flickerName} className={`text-green-300 ${!buttonFixedBugs ? "animate-flicker" : ""}`}>
              {typedName}
            </span>
          </motion.h1>
          <motion.p
            className="text-3xl mt-4 text-green-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span {...flickerRole} className={`text-green-300 ${!buttonFixedBugs ? "animate-flicker" : ""}`}>
              {typedRole}
            </span>
          </motion.p>
          <motion.p
            className="text-xl mt-4 text-gray-400"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span {...flickerResume} className={`${!buttonFixedBugs ? "animate-flicker" : ""}`}>
              {resumeText}
            </span>
          </motion.p>
        </div>

        <div className="flex-1 text-right">
          <motion.p
            className={`text-lg text-gray-400 ${!buttonFixedBugs ? "glitch-text" : ""}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span {...flickerSummary} className={`${!buttonFixedBugs ? "animate-flicker" : ""}`}>
              {summaryText}
            </span>
          </motion.p>
        </div>
      </motion.section>

      <TechnologiesSection buttonFixedBugs={buttonFixedBugs} />
      <FeaturedProjects buttonFixedBugs={buttonFixedBugs} />

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

      <AnimatePresence>
        {showFixButton && (
          <motion.div
            initial={false}
            animate={{
              top: hasUsedFixButton ? '50%' : 'auto',
              bottom: hasUsedFixButton ? 'auto' : '2.5rem',
              right: '0.5rem',
              position: 'fixed',
              zIndex: 50,
              translateY: hasUsedFixButton ? '-50%' : '0%',
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
              <motion.button
                onClick={handleFixBugs}
                className={`
                  fixed bottom-4 left-1/2 -translate-x-1/2 z-50
                  transition-all duration-300 ease-in-out
                  flex items-center justify-center
                  rounded-full overflow-hidden
                  ${buttonFixedBugs
                    ? 'w-10 h-10 bg-blue-600 opacity-40'
                    : 'w-10 h-10 bg-red-600 opacity-50'}
                `}
              >
                {isLoadingFix ? (
                  <FaSpinner className="animate-spin text-white text-xl" />
                ) : (
                  <>
                    <FaBug className="text-white text-xl" />
                    {!buttonFixedBugs && (
                      <span className=""></span>
                    )}
                  </>
                )}
              </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

      <ContactSection buttonFixedBugs={buttonFixedBugs} />
    </div>
  );
}
