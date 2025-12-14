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
          {/* Visual Profile */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold-primary/10 blur-3xl rounded-full"></div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-gold-dim rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-3xl bg-obsidian-light p-1 shadow-2xl">
                    <img
                      src="/images/akash.jpeg"
                      alt="Akash Karri"
                      className="w-full h-full object-cover rounded-[20px] bg-obsidian"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1 font-display">Akash Karri</h3>
                  <p className="text-sm text-gold-primary font-medium tracking-wide uppercase">AI & Security Engineer</p>
                </div>
              </div>

              <div className="space-y-4 font-normal text-sm">
                <div className="flex justify-between items-center p-4 rounded-xl bg-obsidian border border-white/5 hover:border-gold-primary/30 transition-colors">
                  <span className="text-slate-400">Focus:</span>
                  <span className="text-white font-medium">AI Security Fusion</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-obsidian border border-white/5 hover:border-gold-primary/30 transition-colors">
                  <span className="text-slate-400">Approach:</span>
                  <span className="text-white font-medium">First Principles</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-obsidian border border-white/5 hover:border-gold-primary/30 transition-colors">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-medium">Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white">
              Professional <span className="text-gradient-gold">Profile</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              I am a <strong className="text-white font-medium">Cybersecurity Analyst</strong> and <strong className="text-white font-medium">AI Engineer</strong> with a deep focus on building resilient intelligent systems. My work bridges the gap between offensive security and generative AI.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Specializing in <span className="text-gold-primary">Federated Learning</span> and defensive AI architectures, I design solutions that are not only powerful but inherently secure and privacy-preserving.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-obsidian-light/50 border border-white/5 hover:border-gold-primary/30 transition-colors group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <div className="font-bold text-white mb-1">Lifelong Learner</div>
                <div className="text-xs text-slate-500">Continuous Evolution</div>
              </div>
              <div className="p-6 rounded-2xl bg-obsidian-light/50 border border-white/5 hover:border-gold-primary/30 transition-colors group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🔬</div>
                <div className="font-bold text-white mb-1">Innovator</div>
                <div className="text-xs text-slate-500">Research Driven</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
