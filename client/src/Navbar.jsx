import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter">
                    AK<span className="text-neon-blue">.</span>
                </a>

                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="px-5 py-2 rounded-full border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 text-sm font-semibold"
                >
                    Hire Me
                </a>
            </div>
        </motion.nav>
    );
}
