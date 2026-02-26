import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "AlumCraft transformed our office space with stunning glass partitions. The precision and professionalism were outstanding from start to finish.",
    name: "James Mollel",
    project: "Commercial Fit-out",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    quote: "We hired them for our entire residential window and door installation. Every piece was custom-fitted perfectly. Highly recommend their team.",
    name: "Amina Hassan",
    project: "Residential Project",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
  },
  {
    quote: "As a contractor, I need reliable partners. AlumCraft delivers on time, every time, with materials that exceed expectations. A true professional outfit.",
    name: "David Kimaro",
    project: "Government Tender",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    quote: "The attention to detail and customer service exceeded our expectations. We will definitely work with them again for future projects.",
    name: "Sarah Williams",
    project: "Modern Villa",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    quote: "Professional team, on-time delivery, and exceptional quality. Couldn't ask for better partners for our commercial expansion.",
    name: "Mohammed Ahmed",
    project: "Office Expansion",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
  },
  {
    quote: "From initial consultation to final installation, everything was smooth and professional. Highly satisfied with the results.",
    name: "Lisa Chen",
    project: "Home Renovation",
    stars: 5,
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const itemsPerView = {
    mobile: 1,
    desktop: 2,
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsToShow = isMobile ? itemsPerView.mobile : itemsPerView.desktop;
  
  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  useEffect(() => {
    if (!autoPlay || !isVisible) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, isVisible, maxIndex]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-surface-light" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile & Desktop Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: -currentIndex * (isMobile ? 100 : 50) + "%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.5 }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name + i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (i % itemsToShow) * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="min-w-full md:min-w-[50%] flex-shrink-0"
                >
                  <div className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col h-full hover:border-primary/40 transition-colors duration-300">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.3 + j * 0.1 }}
                        >
                          <Star size={16} className="text-primary fill-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm md:text-base text-foreground/80 flex-1 mb-6 leading-relaxed italic">
                      "{t.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover bg-secondary"
                      />
                      <div>
                        <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.project}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-accent-hover text-primary-foreground p-2 md:p-3 rounded-full transition-colors min-h-[40px] min-w-[40px] md:min-h-[48px] md:min-w-[48px] flex items-center justify-center z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-accent-hover text-primary-foreground p-2 md:p-3 rounded-full transition-colors min-h-[40px] min-w-[40px] md:min-h-[48px] md:min-w-[48px] flex items-center justify-center z-10"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-border/60 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Auto play indicator */}
          {autoPlay && (
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center mt-4 text-xs text-muted-foreground"
            >
              Auto-playing · Click arrows to control
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
