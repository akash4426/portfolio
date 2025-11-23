import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-xl opacity-50 animate-pulse-glow"></div>
          <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
            <h2 className="text-4xl font-bold mb-6 text-white">About <span className="text-neon-blue">Me</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate developer and cybersecurity enthusiast with a knack for building secure, scalable, and intelligent systems.
              My journey involves diving deep into <span className="text-neon-purple font-semibold">Federated Learning</span>,
              exploring the depths of <span className="text-neon-blue font-semibold">AI/ML</span>, and crafting robust
              <span className="text-neon-purple font-semibold"> Full-Stack Applications</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm likely researching the latest security vulnerabilities or optimizing neural networks for edge devices.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-2xl overflow-hidden glass-panel flex items-center justify-center border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center p-6">
            {/* Placeholder for Profile Image - Using a stylized icon/text for now */}
            <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,243,255,0.5)]">
              <span className="text-4xl font-bold text-white">AK</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Akash Karri</h3>
            <p className="text-neon-blue">Tech Enthusiast</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
