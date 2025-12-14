import { motion } from "framer-motion";

export default function InfiniteScroll({ items, speed = 20, direction = "left" }) {
    return (
        <div className="relative flex overflow-hidden w-full mask-gradient">
            <motion.div
                className="flex gap-8 py-4 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {/* Render items twice to create the seamless loop */}
                {[...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-400 font-mono text-sm uppercase tracking-widest">
                        {item}
                    </div>
                ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}
