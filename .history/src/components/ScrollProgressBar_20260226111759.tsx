import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted on client side for proper scroll tracking
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50"
      style={{ scaleX: scrollYProgress }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgressBar;
