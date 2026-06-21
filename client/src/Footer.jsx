import { motion } from "framer-motion";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./Icons";
import { HeartIcon } from "./NavIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/akash4426", icon: <GitHubIcon /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kakashreddy", icon: <LinkedInIcon /> },
    { name: "Email", url: "mailto:akashkarri2006@gmail.com", icon: <EmailIcon /> },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden" style={{ background: "#030712" }}>
      <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1 font-display">
              Akash Karri
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Building the future of secure intelligence. 🚀
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 text-slate-400 hover:text-black transition-all rounded-full group"
                style={{ '--hover-bg': '#f59e0b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f59e0b';
                  e.currentTarget.style.borderColor = '#f59e0b';
                  e.currentTarget.style.color = '#030712';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
                title={social.name}
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-500 hover:text-gold-primary transition-colors relative group font-medium"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>© {currentYear} Akash Karri. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Built with{" "}
            <HeartIcon className="w-4 h-4 text-gold-primary fill-current" />{" "}
            using AI
          </p>
        </div>
      </div>
    </footer>
  );
}
