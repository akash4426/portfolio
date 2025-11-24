import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+", icon: "💼" },
  { label: "Projects Completed", value: "15+", icon: "🚀" },
  { label: "Technologies", value: "20+", icon: "⚡" },
  { label: "Certifications", value: "5+", icon: "🏆" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-blue">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-2xl opacity-30 animate-pulse-glow"></div>
            <div className="relative glass-panel p-10 rounded-2xl border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate developer and cybersecurity enthusiast with a knack for building secure, scalable, and intelligent systems.
                My journey involves diving deep into <span className="text-neon-purple font-semibold">Federated Learning</span>,
                exploring the depths of <span className="text-neon-blue font-semibold">AI/ML</span>, and crafting robust
                <span className="text-neon-purple font-semibold"> Full-Stack Applications</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When I'm not coding, I'm likely researching the latest security vulnerabilities or optimizing neural networks for edge devices.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                I believe in continuous learning and staying ahead of the curve in this rapidly evolving tech landscape.
                My goal is to create solutions that not only solve problems but also push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden glass-panel flex items-center justify-center border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
            <div className="text-center p-6 relative z-10">
              {/* Stylized Profile */}
              <div className="w-40 h-40 mx-auto bg-gradient-to-tr from-neon-blue via-electric-violet to-neon-purple rounded-full flex items-center justify-center mb-6 shadow-neon-blue-lg relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-2 bg-deep-space rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient">AK</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Akash Karri</h3>
              <p className="text-neon-blue font-semibold mb-4">Full-Stack Developer & Security Researcher</p>
              <div className="flex gap-4 justify-center mt-6">
                <a href="https://github.com/akash4426" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-neon-blue/20 border border-white/20 hover:border-neon-blue flex items-center justify-center transition-all">
                  <span className="text-xl">💻</span>
                </a>
                <a href="https://www.linkedin.com/in/kakashreddy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-neon-blue/20 border border-white/20 hover:border-neon-blue flex items-center justify-center transition-all">
                  <span className="text-xl">🔗</span>
                </a>
                <a href="mailto:akashkarri2006@gmail.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-neon-blue/20 border border-white/20 hover:border-neon-blue flex items-center justify-center transition-all">
                  <span className="text-xl">📧</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
