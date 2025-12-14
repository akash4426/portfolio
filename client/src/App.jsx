import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import MagneticButton from "./components/MagneticButton";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />;
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-obsidian text-slate-light overflow-hidden font-display selection:bg-gold-light selection:text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative pt-20 bg-pattern overflow-hidden">
        <ParticleBackground />

        {/* Parallax Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-obsidian-light/50 rounded-full blur-[100px]" />
        </motion.div>

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

            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <MagneticButton>
                <a
                  href="#projects"
                  className="inline-block px-10 py-4 rounded-full bg-gold-primary text-obsidian font-bold hover:bg-gold-light hover:shadow-gold transition-all duration-300"
                >
                  View Work
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-block px-10 py-4 rounded-full border border-slate-700 bg-obsidian-light/50 text-white font-medium hover:bg-obsidian-light hover:border-slate-500 transition-all duration-300 backdrop-blur-md"
                >
                  Get in Touch
                </a>
              </MagneticButton>
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
