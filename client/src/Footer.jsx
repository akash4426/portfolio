import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./Icons";

export default function Footer() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/akash4426", icon: <GitHubIcon /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kakashreddy", icon: <LinkedInIcon /> },
    { name: "Email", url: "mailto:akashkarri2006@gmail.com", icon: <EmailIcon /> },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-neural-blue rounded-full animate-pulse"></span>
              SYSTEM STATUS: ONLINE
            </h3>
            <p className="text-gray-500 text-sm font-mono">
              SESSION UPTIME: <span className="text-neural-blue">{formatUptime(uptime)}</span>
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 text-white hover:bg-neural-blue hover:text-black transition-all rounded-full group"
                title={social.name}
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-neural-blue transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neural-blue group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} AKASH KARRI // ALL RIGHTS RESERVED
          </p>
          <p className="text-gray-700 text-[10px] mt-2">
            NEURAL LINK ESTABLISHED // SECURE CONNECTION
          </p>
        </div>
      </div>
    </footer>
  );
}
