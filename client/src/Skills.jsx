import { motion } from "framer-motion";
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
  "Neural Networks": [
    { name: "TensorFlow", level: 76 },
    { name: "PyTorch", level: 75 },
    { name: "Keras", level: 80 },
    { name: "Scikit-learn", level: 88 },
  ],
  "Cyber Defense": [
    { name: "Network Security", level: 85 },
    { name: "Ethical Hacking", level: 70 },
    { name: "Cryptography", level: 76 },
    { name: "Threat Analysis", level: 80 },
  ],
  "Full Stack Core": [
    { name: "React.js", level: 86 },
    { name: "Node.js", level: 74 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 77 },
  ],
  "Languages": [
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "C++", level: 80 },
    { name: "SQL", level: 83 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge <span className="text-gradient-ai">Graph</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visualizing the interconnected nodes of my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line (Visual only) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-px h-8 bg-gradient-to-b from-transparent to-neural-blue/30 hidden lg:block"></div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neural-blue/30 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neural-blue"></span>
                  {category}
                </h3>

                <div className="space-y-4">
                  {items.map((skill, index) => {
                    const Icon = skillIcons[skill.name] || LightningIcon;
                    return (
                      <div key={index} className="relative">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300 flex items-center gap-2">
                            <Icon />
                            {skill.name}
                          </span>
                          <span className="text-neural-blue font-mono text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                            className="h-full bg-gradient-to-r from-neural-blue to-synapse-purple"
                          ></motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
