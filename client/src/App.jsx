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
        {/* Matrix Background Effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-deep-space"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[100px] animate-pulse-glow" />

        <div className="relative z-10 w-full max-w-5xl">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-cyber-green/30 bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-neon-green"
          >
            {/* Terminal Header */}
            <div className="bg-cyber-green/10 px-4 py-2 flex items-center justify-between border-b border-cyber-green/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs text-cyber-green/60 font-mono">user@akash-system:~</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-10 font-mono">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6 text-cyber-green/80"
              >
                <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="text-yellow-400">init_sequence.sh</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-none glitch-text" data-text="AKASH KARRI">
                  AKASH KARRI
                </h1>

                <div className="text-xl md:text-2xl text-gray-400 mb-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-green">❯</span>
                    <span>Cybersecurity Analyst</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-green">❯</span>
                    <span>AI/ML Engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-green">❯</span>
                    <span>Federated Learning Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-green">❯</span>
                    <span>MERN Stack Developer</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-bold uppercase tracking-wider hover:shadow-neon-green"
                  >
                    ./view_projects.sh
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 border border-gray-600 text-gray-400 hover:border-cyber-green hover:text-cyber-green transition-all duration-300 font-bold uppercase tracking-wider"
                  >
                    ./contact_me.sh
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-green/40 font-mono text-xs animate-bounce"
        >
          SCROLL_DOWN_FOR_DATA
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
