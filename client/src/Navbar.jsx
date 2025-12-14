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
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-obsidian/90 backdrop-blur-md border-slate-800 py-3" : "bg-transparent border-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <a href="#" className="text-2xl font-bold text-white tracking-tight font-display hover:text-gold-primary transition-colors">
                        AKASH KARRI
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-slate-400 hover:text-gold-primary transition-colors text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <a
                        href="#contact"
                        className="hidden md:block px-6 py-2 bg-gold-primary/10 text-gold-primary border border-gold-primary/20 hover:bg-gold-primary hover:text-obsidian transition-all duration-300 text-sm font-semibold rounded-full"
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                        className="md:hidden overflow-hidden bg-obsidian-light border-t border-slate-800"
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
                                        className="block text-slate-300 hover:text-gold-primary transition-colors text-lg py-2 font-medium"
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
                                    className="block w-full px-6 py-3 bg-gold-primary text-obsidian font-bold text-center mt-4 rounded-lg hover:bg-gold-light transition-colors"
                                >
                                    Let's Talk
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
