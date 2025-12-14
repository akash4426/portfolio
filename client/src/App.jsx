import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="bg-obsidian text-slate-light overflow-hidden font-display selection:bg-gold-light selection:text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative pt-20 bg-pattern">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-obsidian-light/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold-dim/30 bg-gold-primary/10 text-gold-primary text-sm font-medium mb-8 backdrop-blur-md">
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight text-white">
              Hello, I'm <br className="md:hidden" />
              <span className="text-gradient-gold">Akash Karri</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-text mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Transforming complex problems into elegant solutions through <span className="text-slate-200 font-normal">Artificial Intelligence</span> and <span className="text-slate-200 font-normal">Cybersecurity</span> excellence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#projects"
                className="px-10 py-4 rounded-full bg-gold-primary text-obsidian font-bold hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-gold"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-10 py-4 rounded-full border border-slate-700 bg-obsidian-light/50 text-white font-medium hover:bg-obsidian-light hover:border-slate-500 transition-all duration-300 backdrop-blur-md"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-500 to-transparent opacity-50"></div>
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
