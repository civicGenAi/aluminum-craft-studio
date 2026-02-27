import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { useRef, useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    image: "/images/hero-bg.jpg",
    alt: "Modern aluminum and glass architecture",
    tagline: "Where Vision Meets Metal",
    headline: ["Precision", "Crafted."],
    headlineAccent: ["Professionally", "Installed."],
    subtitle: "Custom aluminum doors, windows, partitions and furniture — built to spec, installed on site across Tanzania.",
  },
  {
    image: "/images/hero-craft.jpg",
    alt: "Craftsmen fabricating aluminum frames in workshop",
    tagline: "The Making",
    headline: ["Handcrafted", "With Care."],
    headlineAccent: ["Every Detail", "Matters."],
    subtitle: "Our skilled team transforms raw aluminum into precision-engineered works of art — one project at a time.",
  },
  {
    image: "/images/hero-finished.jpg",
    alt: "Luxury interior with floor-to-ceiling aluminum windows",
    tagline: "The Result",
    headline: ["Built To", "Last."],
    headlineAccent: ["Designed To", "Impress."],
    subtitle: "From concept to completion — experience the transformation that defines modern living spaces.",
  },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Crossfade Background Images */}
      {heroSlides.map((s, i) => (
        <motion.div
          key={s.image}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover"
            style={{ animation: i === currentSlide ? "ken-burns 20s ease-out forwards" : "none" }}
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
        </motion.div>
      ))}

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-[1]" />

      {/* Cinematic top/bottom film bars */}
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

      {/* Decorative gold lines */}
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

      {/* Content — crossfade text with each slide */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Story tagline */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4 font-semibold border border-primary/30 px-4 py-1.5 rounded-full"
            >
              {slide.tagline}
            </motion.span>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${currentSlide}`}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-foreground leading-[0.95] tracking-tight"
            >
              <span className="block overflow-hidden">
                {slide.headline.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-50%", opacity: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-3 md:mr-5"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden mt-1 md:mt-2">
                {slide.headlineAccent.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-50%", opacity: 0 }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-3 md:mr-5 text-primary"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Animated gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-32 md:w-48 bg-gradient-to-r from-primary to-transparent mt-6 mb-6 origin-left"
          />

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-silver max-w-lg leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
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
            <a
              href="#portfolio"
              className="w-full sm:w-auto border border-foreground/30 text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-foreground/10 transition-all min-h-[48px] text-center flex items-center justify-center"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentSlide ? "w-10 bg-primary" : "w-4 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <ChevronDown className="text-silver bounce-down" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
