import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setFollowerPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('button, a, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Start following after a small delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        x: followerPosition.x,
        y: followerPosition.y,
        marginLeft: '-12px',
        marginTop: '-12px',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        scale: { duration: 0.3 }
      }}
    >
      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${isHovering ? 'border-gold-primary bg-gold-primary/20' : 'border-white/50 bg-white/10'} backdrop-blur-sm`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${isHovering ? 'bg-gold-primary' : 'bg-white'} animate-pulse`} />
    </motion.div>
  );
}