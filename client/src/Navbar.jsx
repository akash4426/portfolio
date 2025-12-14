import Dock from "./components/Dock";
import { HomeIcon, UserIcon, ChipIcon, RocketIcon, MailIcon } from "./NavIcons";

export default function Navbar() {
    const items = [
        { label: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "#hero" },
        { label: "About", icon: <UserIcon className="w-6 h-6" />, href: "#about" },
        { label: "Skills", icon: <ChipIcon className="w-6 h-6" />, href: "#skills" },
        { label: "Projects", icon: <RocketIcon className="w-6 h-6" />, href: "#projects" },
        { label: "Contact", icon: <MailIcon className="w-6 h-6" />, href: "#contact" },
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
