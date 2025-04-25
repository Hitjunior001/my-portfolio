import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center space-y-6 py-12 text-gray-300 relative z-10"
    >
      <h2 className="text-3xl font-bold text-green-500">Contato</h2>

      <div className="flex justify-center gap-8 text-4xl">
        <a
          href="https://github.com/Hitjunior001"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/reginaldo-oliveira-8926b2225/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:junior_ferraz_11@hotmail.com"
          className="hover:text-white transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm text-gray-500">© 2025 Reginaldo de Oliveira</p>
    </motion.section>
  );
}
