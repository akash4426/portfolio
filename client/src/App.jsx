import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="bg-deep-space text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-glow" />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300"
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Akash Karri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Cybersecurity • AI/ML • Federated Learning • MERN Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-neon-blue/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
