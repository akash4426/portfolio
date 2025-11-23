import { motion } from "framer-motion";

const skills = [
  "Python",
  "C",
  "C++",
  "Java",
  "React", "Node.js", "Express", "MongoDB",
  "Python", "TensorFlow", "PyTorch", "Federated Learning",
  "Cybersecurity", "Network Security", "Git", "Docker"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My <span className="text-neon-purple">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: "#bc13fe" }}
              className="glass-panel p-6 rounded-xl border border-white/5 text-center cursor-pointer hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
