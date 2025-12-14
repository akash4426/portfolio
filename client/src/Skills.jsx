import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
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
    <section id="skills" className="py-24 px-6 relative bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            Technical <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            A comprehensive overview of my technical capabilities and proficiency levels.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <FadeIn
              key={category}
              delay={categoryIndex * 0.1}
              className="h-full"
            >
              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-all duration-300 h-full group hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gold-primary rounded-full"></span>
                  {category}
                </h3>

                <div className="space-y-5">
                  {items.map((skill, index) => {
                    const Icon = skillIcons[skill.name] || LightningIcon;
                    return (
                      <div key={index} className="relative">
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-300 flex items-center gap-2 font-medium">
                            <Icon />
                            {skill.name}
                          </span>
                          <span className="text-gold-primary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-obsidian rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                            className="h-full bg-gold-primary"
                          ></motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
