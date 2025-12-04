import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="bg-deep-space text-white overflow-hidden font-mono selection:bg-cyber-green selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-50 crt"></div>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative pt-20">
        {/* Neural Background Effect */}
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-mind/80 to-deep-mind"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-synapse-purple/10 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="relative z-10 w-full max-w-5xl text-center">

          {/* Central Core Visualization */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-32 h-32 mx-auto mb-12 relative"
          >
            <div className="absolute inset-0 rounded-full border-2 border-neural-blue/30 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border-2 border-synapse-purple/30 animate-spin-reverse-slow"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neural-blue/20 to-synapse-purple/20 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🧠</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-neural-blue/30 bg-neural-blue/5 text-neural-blue text-sm font-mono mb-6 backdrop-blur-md">
              INITIALIZING_NEURAL_LINK...
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none text-white">
              AKASH <span className="text-gradient-ai">KARRI</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems at the intersection of <span className="text-neural-blue">AI</span> and <span className="text-synapse-purple">Cybersecurity</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-neural-blue to-synapse-purple text-white font-bold hover:shadow-neural transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Research
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-neural-blue/50 transition-all duration-300 backdrop-blur-md"
              >
                Connect Neural Link
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs font-mono"
        >
          <span>SCROLL_TO_PROCESS</span>
          <div className="w-px h-12 bg-gradient-to-b from-neural-blue to-transparent"></div>
        </motion.div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
