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

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      update(mouse) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(mousePos);
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
  }, [mousePos]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen" />;
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-obsidian text-slate-light overflow-hidden font-display selection:bg-gold-light selection:text-obsidian">
      <Navbar />

      {/* Hero Section */}
      <Spotlight className="min-h-screen flex items-center justify-center px-6 relative pt-20 bg-pattern overflow-hidden group">
        <ParticleBackground />

        {/* Parallax Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-primary/10 rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
        </motion.div>

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

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tighter leading-tight text-white">
              <TextScramble text="AKASH" className="inline-block" /> <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-white">
                <TextScramble text="KARRI" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-text mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Designing the future of <span className="text-white font-medium">Intelligence</span> and <span className="text-white font-medium">Security</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
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
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-500 to-transparent opacity-50"></div>
        </motion.div>
      </Spotlight>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
