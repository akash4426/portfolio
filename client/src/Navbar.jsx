import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
        };
    }, []);

    const links = [
        { name: "// ABOUT", href: "#about" },
        { name: "// SKILLS", href: "#skills" },
        { name: "// PROJECTS", href: "#projects" },
        { name: "// CONTACT", href: "#contact" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <a href="#" className="text-2xl font-bold text-cyber-green tracking-tighter font-mono group flex items-center gap-2">
                        <span className="text-xl">&lt;AK /&gt;</span>
                    </a>
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyber-green/60 border-l border-white/10 pl-4">
                        <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
                        SYSTEM ONLINE
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-400 hover:text-cyber-green transition-colors text-sm font-mono relative group"
                            >
                                <span className="text-cyber-green/40 mr-1">0{links.indexOf(link) + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <div className="hidden md:block text-xs font-mono text-cyber-green/60">
                        {time}
                    </div>
                    <a
                        href="#contact"
                        className="hidden md:block px-6 py-2 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 text-sm font-mono hover:shadow-neon-green"
                    >
                        INITIATE_UPLINK
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-cyber-green transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-cyber-green transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-cyber-green transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-cyber-green/20"
                    >
                        <ul className="px-6 py-8 space-y-4 font-mono">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="block text-gray-300 hover:text-cyber-green transition-colors text-lg py-2"
                                    >
                                        <span className="text-cyber-green/40 mr-2">0{index + 1}.</span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: links.length * 0.1 }}
                            >
                                <a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    className="block w-full px-6 py-3 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 text-center mt-4"
                                >
                                    INITIATE_UPLINK
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
