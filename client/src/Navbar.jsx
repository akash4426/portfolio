import Dock from "./components/Dock";

export default function Navbar() {
    const items = [
        { label: "Home", icon: "⚡", href: "#hero" },
        { label: "About", icon: "👨‍💻", href: "#about" },
        { label: "Skills", icon: "🛸", href: "#skills" },
        { label: "Projects", icon: "🚀", href: "#projects" },
        { label: "Contact", icon: "📬", href: "#contact" },
    ];

    return (
        <>
            <div className="fixed top-6 left-6 z-50 mix-blend-difference pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold-primary font-bold text-xl shadow-2xl">
                    A
                </div>
            </div>

            <Dock items={items} />
        </>
    );
}
