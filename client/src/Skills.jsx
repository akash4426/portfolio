import { motion } from "framer-motion";
import {
  PythonIcon, JavaScriptIcon, CppIcon, JavaIcon,
  BrainIcon, FireIcon, LockIcon, BookIcon,
  ReactIcon, NodeIcon, MongoIcon, LightningIcon,
  ShieldIcon, SearchIcon, DockerIcon, GitIcon
} from "./Icons";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 80, icon: <PythonIcon /> },
      { name: "JavaScript", level: 75, icon: <JavaScriptIcon /> },
      { name: "C++", level: 70, icon: <CppIcon /> },
      { name: "Java", level: 75, icon: <JavaIcon /> },
    ],
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", level: 70, icon: <BrainIcon /> },
      { name: "PyTorch", level: 75, icon: <FireIcon /> },
      { name: "Federated Learning", level: 80, icon: <LockIcon /> },
      { name: "RAG Systems", level: 85, icon: <BookIcon /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: 83, icon: <ReactIcon /> },
      { name: "Node.js", level: 70, icon: <NodeIcon /> },
      { name: "MongoDB", level: 70, icon: <MongoIcon /> },
      { name: "FastAPI", level: 75, icon: <LightningIcon /> },
    ],
  },
  {
    category: "Cybersecurity & Tools",
    skills: [
      { name: "Network Security", level: 60, icon: <ShieldIcon /> },
      { name: "Penetration Testing", level: 65, icon: <SearchIcon /> },
      { name: "Docker", level: 70, icon: <DockerIcon /> },
      { name: "Git", level: 90, icon: <GitIcon /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            SYSTEM_<span className="text-cyber-green">CAPABILITIES</span>
          </h2>
          <div className="h-1 w-24 bg-cyber-green mx-auto"></div>
          <p className="text-cyber-green/60 font-mono mt-4">
            // LOADING_MODULES...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-black/80 border border-cyber-green/30 p-6 relative overflow-hidden group hover:border-cyber-green/60 transition-colors"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-green"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-green"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-green"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-green"></div>

              <h3 className="text-xl font-bold font-mono text-cyber-green mb-6 flex items-center gap-2">
                <span className="text-cyber-green/50">&gt;</span> {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                      <span className="flex items-center gap-2">
                        <span className="text-cyber-green">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-cyber-green">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-gray-800 w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-cyber-green relative group-hover:shadow-neon-green"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 border border-cyber-green/20 bg-black/50 p-6 font-mono text-sm"
        >
          <div className="text-cyber-green/60 mb-4 border-b border-cyber-green/20 pb-2">
            // ADDITIONAL_DEPENDENCIES
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-400">
            {["AWS", "Linux", "CI/CD", "REST APIs", "GraphQL", "Redis", "PostgreSQL", "Kubernetes", "Wireshark", "Metasploit"].map((tech, i) => (
              <span key={i} className="hover:text-cyber-green transition-colors cursor-crosshair">
                <span className="text-cyber-green/40 mr-2">[{i < 9 ? `0${i + 1}` : i + 1}]</span>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
