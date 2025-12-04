import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { label: "YEARS_EXP", value: "01+", icon: "⚡" },
  { label: "PROJECTS_COMPLETED", value: "10+", icon: "📂" },
  { label: "TECH_STACK", value: "10+", icon: "💻" },
  { label: "CERTIFICATIONS", value: "02+", icon: "🎖" },
];

const DecryptText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }).join(""));

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyber-green/5 skew-x-12 border-l border-cyber-green/10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-cyber-blue/5 -skew-x-12 border-r border-cyber-blue/10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-cyber-green"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-cyber-green">
            <DecryptText text="SYSTEM_DOSSIER" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black border border-cyber-green/30 p-1 rounded-lg">
              <div className="aspect-square relative overflow-hidden rounded bg-deep-space flex items-center justify-center">
                <div className="absolute inset-0 bg-scanline opacity-50 pointer-events-none"></div>
                <div className="w-48 h-48 rounded-full border-4 border-cyber-green/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 border-t-4 border-cyber-green rounded-full animate-spin-slow"></div>
                  <span className="text-6xl font-bold text-cyber-green font-mono">AK</span>
                </div>

                {/* HUD Elements */}
                <div className="absolute top-4 left-4 text-xs font-mono text-cyber-green/60">
                  ID: 9483-XJ<br />
                  STATUS: ACTIVE
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-cyber-green/60 text-right">
                  LOC: UNKNOWN<br />
                  ENC: AES-256
                </div>
              </div>

              <div className="p-6 border-t border-cyber-green/30 bg-cyber-green/5">
                <h3 className="text-2xl font-bold text-white font-mono mb-1">AKASH KARRI</h3>
                <p className="text-cyber-green font-mono text-sm">FULL_STACK_OPERATIVE</p>

                <div className="flex gap-4 mt-6 justify-center">
                  <a href="https://github.com/akash4426" target="_blank" rel="noopener noreferrer" className="p-2 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green hover:text-black transition-all">
                    GITHUB_UPLINK
                  </a>
                  <a href="https://www.linkedin.com/in/kakashreddy" target="_blank" rel="noopener noreferrer" className="p-2 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green hover:text-black transition-all">
                    LINKEDIN_NODE
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/50 border border-cyber-green/20 p-8 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>

              <p className="text-gray-300 font-mono text-lg leading-relaxed mb-6">
                <span className="text-cyber-green">&gt;</span> Subject is a highly skilled developer with a focus on <span className="text-white bg-cyber-green/20 px-1">Federated Learning</span> and <span className="text-white bg-cyber-green/20 px-1">AI/ML Security</span>.
              </p>
              <p className="text-gray-300 font-mono text-lg leading-relaxed mb-6">
                <span className="text-cyber-green">&gt;</span> Current mission involves architecting robust full-stack applications and identifying system vulnerabilities.
              </p>
              <p className="text-gray-400 font-mono text-sm border-l-2 border-cyber-green/50 pl-4">
                "Continuous adaptation is the only defense against obsolescence."
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-cyber-green/5 border border-cyber-green/20 p-4 hover:bg-cyber-green/10 transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl font-bold text-cyber-green font-mono">{stat.value}</div>
                  <div className="text-xs text-cyber-green/60 font-mono tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
