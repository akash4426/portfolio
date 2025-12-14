import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Dock({ items }) {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900/40 px-4 pb-3 border border-white/10 backdrop-blur-2xl"
        >
            {items.map((item, i) => (
                <DockIcon mouseX={mouseX} key={i} item={item} />
            ))}
        </motion.div>
    );
}

function DockIcon({ mouseX, item }) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={item.href}
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-full bg-gray-800 border border-white/20 hover:bg-gold-primary/20 flex items-center justify-center transition-colors group relative"
        >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                {item.label}
            </span>
        </motion.a>
    );
}
