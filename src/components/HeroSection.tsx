import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const words = ["Precision", "Crafted.", "Professionally", "Installed."];

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Modern aluminum and glass architecture"
          className="w-full h-full object-cover ken-burns"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-6"
        >
          <span className="section-label bg-primary/10 border border-border px-4 py-1.5 rounded-full text-primary">
            Tanzania's Premium Aluminum Specialists
          </span>
        </motion.div>

        {/* Headline word-by-word */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground mb-6 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="section-subtitle mx-auto mb-8 text-silver text-sm sm:text-base md:text-lg max-w-xl"
        >
          Custom aluminum doors, windows, partitions and furniture — built to spec, installed on site across Tanzania.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppLink(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-accent-hover transition-colors min-h-[48px] text-center"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto border border-foreground/30 text-foreground px-8 py-3.5 rounded-md font-semibold hover:border-primary hover:text-primary transition-colors min-h-[48px] text-center"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-silver bounce-down" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
