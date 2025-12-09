import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Visual Model Architecture */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neural-blue/20 to-synapse-purple/20 blur-3xl rounded-full"></div>
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neural-blue to-synapse-purple"></div>

              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue to-synapse-purple rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-3xl bg-gradient-to-br from-neural-blue to-synapse-purple p-[2px] shadow-2xl shadow-neural-blue/20">
                    <img
                      src="/images/akash.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-[22px] bg-deep-space"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Model Architecture</h3>
                  <p className="text-sm text-gray-400 font-mono">v2.4.0 (Stable)</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-gray-400">Architecture:</span>
                  <span className="text-neural-blue">Hybrid (AI + Security)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-gray-400">Learning Rate:</span>
                  <span className="text-synapse-purple">Exponential</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-gray-400">Optimization:</span>
                  <span className="text-green-400">Continuous</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>TRAINING_PROGRESS</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neural-blue to-synapse-purple w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About The <span className="text-gradient-ai">Model</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a <span className="text-white font-semibold">Cybersecurity Analyst</span> and <span className="text-white font-semibold">AI Engineer</span> trained on a diverse dataset of full-stack development, machine learning algorithms, and security protocols.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My objective function is to build secure, intelligent systems that solve complex real-world problems. I specialize in <span className="text-neural-blue">Federated Learning</span> for privacy-preserving AI and developing robust defense mechanisms against evolving digital threats.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-neural-blue/30 transition-colors">
                <div className="text-3xl mb-2">🎓</div>
                <div className="font-bold text-white">Student</div>
                <div className="text-xs text-gray-500">Constant Learning</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-synapse-purple/30 transition-colors">
                <div className="text-3xl mb-2">🔬</div>
                <div className="font-bold text-white">Researcher</div>
                <div className="text-xs text-gray-500">Innovation Focused</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
