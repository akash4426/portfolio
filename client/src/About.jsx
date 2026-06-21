import { motion } from "framer-motion";
import Spotlight from "./components/Spotlight";
import FadeIn from "./components/FadeIn";
import { LightningIcon, ShieldIcon } from "./Icons";
import { GraduationIcon } from "./NavIcons";

const stats = [
  { label: "AI Projects", value: "7+" },
  { label: "GitHub Repos", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Year", value: "UG" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" style={{ background: "rgba(10, 15, 26, 0.3)" }}>
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 neural-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
            Professional <span className="text-gradient-gold">Profile</span>
          </h2>
        </FadeIn>

        <Spotlight className="grid grid-cols-1 md:grid-cols-3 gap-6 group">
          {/* Card 1: Profile Photo */}
          <motion.div
            className="md:row-span-2 relative rounded-3xl border border-white/10 overflow-hidden group/card"
            style={{ background: "#0a0f1a" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gold-primary/5 group-hover/card:bg-gold-primary/10 transition-colors duration-500"></div>
            <div className="h-full flex flex-col p-6">
              {/* Profile image */}
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden border border-white/10 shimmer-border">
                <img
                  src="/images/akash.jpg"
                  alt="Akash Karri"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div
                  className="w-full h-full items-center justify-center text-6xl font-bold text-gradient-gold"
                  style={{ display: 'none', background: 'linear-gradient(135deg, #0a0f1a, #1e293b)' }}
                >
                  AK
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-white mb-1 font-display group-hover/card:text-gold-primary transition-colors duration-300">
                  Akash Karri
                </h3>
                <p className="text-gold-primary font-medium tracking-wide text-sm mb-4">
                  AI & Security Engineer
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs text-slate-400 border border-white/10 bg-white/5 hover:border-cyber/50 hover:text-cyber transition-colors duration-300">
                    📍 Visakhapatnam
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs text-cyber border border-cyber/30 bg-cyber/5 animate-pulse">
                    🟢 Open to Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Bio */}
          <motion.div
            className="md:col-span-2 relative rounded-3xl border border-white/10 p-8 flex flex-col justify-center group/card overflow-hidden"
            style={{ background: "#0a0f1a" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover/card:from-gold-primary/8 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber/10 rounded-full blur-3xl group-hover/card:bg-cyber/20 transition-colors duration-500"></div>

            <div className="relative z-10">
              {/* AI Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyber/10 border border-cyber/20 text-cyber text-xs font-mono uppercase tracking-wider">
                  AI · ML · Security
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-4">
                🔮 Intelligence meets Defense
              </h4>
              <p className="text-slate-400 text-base leading-relaxed mb-4 font-light">
                I am a <strong className="text-white font-medium">UG student</strong> passionate about{" "}
                <strong className="text-white font-medium">Cybersecurity</strong> and{" "}
                <strong className="text-white font-medium">AI Engineering</strong> with a deep focus on building
                resilient intelligent systems. My work bridges offensive security and generative AI.
              </p>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                Specializing in <span className="text-gold-primary font-semibold">Federated Learning</span>,{" "}
                <span className="text-cyber font-semibold">RAG Systems</span>, and{" "}
                <span className="text-accent-purple font-semibold">LLM applications</span> — building
                solutions that are powerful, secure, and privacy-preserving.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Stats */}
          <motion.div
            className="relative rounded-3xl border border-white/10 p-6 flex flex-col justify-between group/card hover:border-gold-primary/30 transition-all duration-300"
            style={{ background: "#0a0f1a" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-primary/5 rounded-full blur-2xl group-hover/card:bg-gold-primary/15 transition-colors duration-500"></div>
            <div className="space-y-4 relative z-10">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="text-2xl font-bold text-gradient-gold">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center text-gold-primary">
                  <LightningIcon />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Focus</div>
                  <div className="text-white font-medium">AI Integration</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Approach</div>
                  <div className="text-white font-medium">Zero Trust</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Lifelong Learner */}
          <motion.div
            className="relative rounded-3xl border border-white/10 p-6 flex items-center gap-4 group/card hover:bg-white/5 hover:border-gold-primary/30 transition-all duration-300"
            style={{ background: "#0a0f1a" }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="text-gold-primary">
              <GraduationIcon className="w-10 h-10" />
            </div>
            <div>
              <div className="font-bold text-white text-lg group-hover/card:text-gold-primary transition-colors">
                Lifelong Learner
              </div>
              <div className="text-sm text-slate-500 group-hover/card:text-slate-300 transition-colors">
                Continuous Evolution
              </div>
            </div>
          </motion.div>
        </Spotlight>
      </div>
    </section>
  );
}
