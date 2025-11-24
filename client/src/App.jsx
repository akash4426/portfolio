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
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-glow-purple" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-violet/10 rounded-full blur-[150px] animate-float" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-1/4 w-3 h-3 bg-neon-blue rounded-full shadow-neon-blue-lg"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple-lg"
        />

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block px-6 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm text-sm text-gray-300 font-medium shadow-neon-blue"
          >
            <span className="inline-block w-2 h-2 bg-neon-blue rounded-full mr-2 animate-pulse"></span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none"
          >
            Hi, I'm <span className="text-gradient animate-gradient">Akash Karri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            <span className="text-neon-blue font-semibold">Cybersecurity</span> •{" "}
            <span className="text-neon-purple font-semibold">AI/ML</span> •{" "}
            <span className="text-neon-cyan font-semibold">Federated Learning</span> •{" "}
            <span className="text-electric-violet font-semibold">MERN Developer</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
            <a
              href="#projects"
              className="group px-10 py-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold hover:shadow-neon-blue-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-10 py-5 rounded-full border-2 border-neon-blue/50 hover:border-neon-blue text-white hover:bg-neon-blue/10 transition-all duration-300 font-semibold backdrop-blur-sm transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-neon-blue rounded-full"
                />
              </div>
            </motion.div>
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
