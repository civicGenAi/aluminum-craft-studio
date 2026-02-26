import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { useRef } from "react";

const line1 = ["Precision", "Crafted."];
const line2 = ["Professionally", "Installed."];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/hero-bg.jpg"
          alt="Modern aluminum and glass architecture"
          className="w-full h-full object-cover ken-burns"
          loading="eager"
          width={1920}
          height={1080}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Cinematic top film bars */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[15%] bg-background z-20 origin-left"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[15%] bg-background z-20 origin-right"
      />

      {/* Decorative gold line accents */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 md:left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-top z-10 hidden md:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-bottom z-10 hidden md:block"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Cinematic stagger headline */}
        <div className="max-w-4xl mx-auto">
          {/* Line 1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-foreground leading-[0.95] tracking-tight">
            <span className="block overflow-hidden">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", rotateX: 40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.12,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-3 md:mr-5"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 — gold accent */}
            <span className="block overflow-hidden mt-1 md:mt-2">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", rotateX: 40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{
                    delay: 1.1 + i * 0.12,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-3 md:mr-5 text-primary"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Animated gold divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-32 md:w-48 bg-gradient-to-r from-primary to-transparent mt-6 mb-6 origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-silver max-w-lg leading-relaxed"
          >
            Custom aluminum doors, windows, partitions and furniture —
            built to spec, installed on site across Tanzania.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-8"
          >
            <a
              href={buildWhatsAppLink(whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-all min-h-[48px] text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <ChevronDown className="text-silver bounce-down" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
