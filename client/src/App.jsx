import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

function NeuralCore() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="relative w-64 h-64 mx-auto mb-12 cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {/* Glowing Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-neural-blue/30 to-synapse-purple/30 rounded-full blur-[60px] animate-pulse-slow" />

        {/* Interactive Image */}
        <motion.div
          className="w-full h-full relative z-10"
          style={{ transform: "translateZ(50px)" }}
        >
          <img
            src="/images/neural-core.png"
            alt="Neural Core"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,243,255,0.5)]"
          />

          {/* Orbital Rings */}
          <div className="absolute inset-0 border border-neural-blue/30 rounded-full animate-spin-slow" style={{ transform: "scale(1.2) rotateX(60deg)" }}></div>
          <div className="absolute inset-0 border border-synapse-purple/30 rounded-full animate-spin-reverse-slow" style={{ transform: "scale(1.4) rotateY(60deg)" }}></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

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
          <NeuralCore />

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
