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
      { name: "Python", level: 95, icon: <PythonIcon /> },
      { name: "JavaScript", level: 90, icon: <JavaScriptIcon /> },
      { name: "C++", level: 85, icon: <CppIcon /> },
      { name: "Java", level: 80, icon: <JavaIcon /> },
    ],
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", level: 90, icon: <BrainIcon /> },
      { name: "PyTorch", level: 88, icon: <FireIcon /> },
      { name: "Federated Learning", level: 85, icon: <LockIcon /> },
      { name: "RAG Systems", level: 92, icon: <BookIcon /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: 92, icon: <ReactIcon /> },
      { name: "Node.js", level: 88, icon: <NodeIcon /> },
      { name: "MongoDB", level: 85, icon: <MongoIcon /> },
      { name: "FastAPI", level: 90, icon: <LightningIcon /> },
    ],
  },
  {
    category: "Cybersecurity & Tools",
    skills: [
      { name: "Network Security", level: 87, icon: <ShieldIcon /> },
      { name: "Penetration Testing", level: 82, icon: <SearchIcon /> },
      { name: "Docker", level: 85, icon: <DockerIcon /> },
      { name: "Git", level: 93, icon: <GitIcon /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-neon-purple transition-colors">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">{skill.icon}</div>
                        <span className="text-gray-200 font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-neon-blue font-mono text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{
                          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          backgroundSize: '200% 100%',
                        }}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Also Experienced With</p>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {["AWS", "Linux", "CI/CD", "REST APIs", "GraphQL", "Redis", "PostgreSQL", "Kubernetes", "Wireshark", "Metasploit"].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2 text-sm font-semibold rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-neon-blue/50 hover:text-neon-blue transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
