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
import CursorFollower from "./components/CursorFollower";

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const techStack = [
    "✦ Machine Learning", "✦ Cybersecurity", "✦ React", "✦ Python",
    "✦ TensorFlow", "✦ Cryptography", "✦ FastAPI", "✦ TailwindCSS",
    "✦ Framer Motion", "✦ Docker", "✦ RAG Systems", "✦ GenAI"
  ];

  return (
    <div className="bg-obsidian text-slate-light overflow-hidden font-display relative" style={{ cursor: 'none' }}>
      <div className="bg-noise"></div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber via-gold-primary to-accent-purple z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      {/* Hero Section */}
      <AuroraHero>
        <div id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-20 overflow-hidden">
          {/* Neural grid overlay */}
          <div className="absolute inset-0 neural-grid opacity-40 pointer-events-none" />

          <div className="relative z-10 w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber/30 bg-cyber/5 text-cyber text-sm font-medium mb-8 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber"></span>
                </span>
                Available for Opportunities
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tighter leading-tight">
                <span className="text-white">
                  <TextScramble text="AKASH" className="inline-block" />
                </span>{" "}
                <br className="md:hidden" />
                <span className="text-gradient-gold">
                  <TextScramble text="KARRI" />
                </span>
              </h1>

              {/* Role Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                UG Student · <span className="text-white font-medium">AI Engineer</span> · <span className="text-cyber font-medium">Cybersecurity</span> · <span className="text-gold-primary font-medium">Builder</span>
              </motion.p>

              <motion.p
                className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Designing the future of{" "}
                <span className="text-white font-medium">Intelligence</span> and{" "}
                <span className="text-white font-medium">Security</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <MagneticButton>
                  <a
                    href="#projects"
                    className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gold-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-gold btn-shine"
                  >
                    View My Work →
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-block px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
                  >
                    Get In Touch
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Marquee */}
              <div className="mask-gradient-x opacity-70">
                <InfiniteScroll items={techStack} speed={30} />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="uppercase tracking-widest font-mono">scroll</span>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </div>
      </AuroraHero>

      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Custom Cursor Follower */}
      <CursorFollower />

      <Footer />
    </div>
  );
}
