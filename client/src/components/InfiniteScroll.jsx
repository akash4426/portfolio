import { motion } from "framer-motion";

export default function InfiniteScroll({ items, speed = 20, direction = "left" }) {
    return (
        <div className="relative flex overflow-hidden w-full">
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
                    <div key={idx} className="flex items-center gap-3 text-slate-500 font-mono text-xs uppercase tracking-widest">
                        <span className="text-cyber opacity-40">◆</span>
                        {item}
                    </div>
                ))}
            </motion.div>
            {/* Fade edges with actual color, not class */}
            <div
                className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #030712, transparent)" }}
            ></div>
            <div
                className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #030712, transparent)" }}
            ></div>
        </div>
    );
}
