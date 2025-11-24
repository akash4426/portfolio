import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter group">
                    <span className="text-gradient group-hover:animate-gradient">AK</span>
                    <span className="text-neon-blue">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden md:block px-6 py-2.5 rounded-full border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 text-sm font-semibold shadow-neon-blue hover:shadow-neon-blue-lg"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-neon-blue transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-neon-blue transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-neon-blue transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <ul className="px-6 py-8 space-y-4">
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
                                        className="block text-gray-300 hover:text-neon-blue transition-colors text-lg font-medium py-2"
                                    >
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
                                    className="block w-full px-6 py-3 rounded-full border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 text-center font-semibold mt-4"
                                >
                                    Hire Me
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
