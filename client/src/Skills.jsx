import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import Spotlight from "./components/Spotlight";
import {
  PythonIcon, JavaScriptIcon, CppIcon, JavaIcon,
  BrainIcon, FireIcon, LockIcon, BookIcon,
  ReactIcon, NodeIcon, MongoIcon, LightningIcon,
  ShieldIcon, SearchIcon, DockerIcon, GitIcon,
  TensorFlowIcon, PyTorchIcon, KerasIcon, ScikitLearnIcon,
  ExpressIcon, SQLIcon, NetworkSecurityIcon, EthicalHackingIcon,
  CryptographyIcon, ThreatAnalysisIcon
} from "./Icons";

const skillIcons = {
  "TensorFlow": TensorFlowIcon,
  "PyTorch": PyTorchIcon,
  "Keras": KerasIcon,
  "Scikit-learn": ScikitLearnIcon,
  "Network Security": NetworkSecurityIcon,
  "Ethical Hacking": EthicalHackingIcon,
  "Cryptography": CryptographyIcon,
  "Threat Analysis": ThreatAnalysisIcon,
  "React.js": ReactIcon,
  "Node.js": NodeIcon,
  "MongoDB": MongoIcon,
  "Express": ExpressIcon,
  "Python": PythonIcon,
  "JavaScript": JavaScriptIcon,
  "C++": CppIcon,
  "SQL": SQLIcon,
};

const skills = {
  "AI & ML": [
    { name: "TensorFlow", level: 76 },
    { name: "PyTorch", level: 75 },
    { name: "Keras", level: 80 },
    { name: "Scikit-learn", level: 88 },
  ],
  "Cybersecurity": [
    { name: "Network Security", level: 85 },
    { name: "Ethical Hacking", level: 70 },
    { name: "Cryptography", level: 76 },
    { name: "Threat Analysis", level: 80 },
  ],
  "Full Stack dev": [
    { name: "React.js", level: 86 },
    { name: "Node.js", level: 74 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 77 },
  ],
  "Programming": [
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "C++", level: 80 },
    { name: "SQL", level: 83 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-obsidian-light/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyber/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyber-glow/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-display text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-gradient-gold">Expertise</span>
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical capabilities and proficiency levels.
          </motion.p>
        </FadeIn>

        <Spotlight className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 group">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <FadeIn
              key={category}
              delay={categoryIndex * 0.1}
              className="h-full"
            >
              <motion.div
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-all duration-300 h-full group/card hover:-translate-y-2 bg-obsidian/50 card-lift"
                whileHover={{ scale: 1.03 }}
              >
                <motion.h3
                  className="text-xl font-bold text-white mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                >
                  <motion.span
                    className="w-1.5 h-6 bg-gold-primary rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.5 }}
                  ></motion.span>
                  {category}
                </motion.h3>

                <div className="space-y-5">
                  {items.map((skill, index) => {
                    const Icon = skillIcons[skill.name] || LightningIcon;
                    return (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.15 + index * 0.1 + 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-300 flex items-center gap-2 font-medium">
                            <span className="icon-bounce inline-block"><Icon /></span>
                            {skill.name}
                          </span>
                          <span className="text-gold-primary font-mono text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-obsidian rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.15 + index * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-gold-primary to-cyber-blue relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}