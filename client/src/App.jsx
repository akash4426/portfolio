import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import MagneticButton from "./components/MagneticButton";
import TextScramble from "./components/TextScramble";
import Spotlight from "./components/Spotlight";
import AuroraHero from "./components/AuroraHero";
import InfiniteScroll from "./components/InfiniteScroll";

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const techStack = [
    "Machine Learning", "Cybersecurity", "React", "Python", "TensorFlow", "Cryptography", "FastAPI", "TailwindCSS", "Framer Motion", "Docker"
  ];

  return (
    <div className="bg-obsidian text-slate-light overflow-hidden font-display selection:bg-gold-light selection:text-obsidian relative">
      <div className="bg-noise"></div>
      <Navbar />

      {/* Hero Section */}
      <AuroraHero>
        <div id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-20 overflow-hidden group">
          <div className="relative z-10 w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold-dim/30 bg-gold-primary/5 text-gold-primary text-sm font-medium mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2 inline-flex mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-primary"></span>
                </span>
                System Online
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tighter leading-tight text-white mix-blend-overlay">
                <TextScramble text="AKASH" className="inline-block" /> <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-white">
                  <TextScramble text="KARRI" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-200/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mix-blend-screen">
                Designing the future of <span className="text-white font-medium">Intelligence</span> and <span className="text-white font-medium">Security</span>.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mb-24">
                <MagneticButton>
                  <a
                    href="#projects"
                    className="inline-block px-12 py-4 rounded-full bg-white text-black font-bold hover:bg-gold-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-gold"
                  >
                    View My Work
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-block px-12 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
                  >
                    Contact Me
                  </a>
                </MagneticButton>
              </div>

              {/* Marquee */}
              <div className="mask-gradient-x opacity-70">
                <InfiniteScroll items={techStack} speed={30} />
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraHero>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
