import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/akash4426", icon: "💻" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kakashreddy", icon: "💼" },
    { name: "Email", url: "mailto:akashkarri2006@gmail.com", icon: "📧" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-deep-space to-transparent border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Akash Karri</h3>
            <p className="text-gray-400 text-sm">Building the future, one line of code at a time</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-neon-blue/20 border border-white/10 hover:border-neon-blue flex items-center justify-center transition-all group"
                title={social.name}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-neon-blue transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Akash Karri. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with <span className="text-neon-purple">React</span>, <span className="text-neon-blue">Tailwind CSS</span>, and <span className="text-neon-cyan">Framer Motion</span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}
