import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  { id: "modern-office-fitout", title: "Modern Office Fit-out", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", orientation: "landscape" },
  { id: "villa-window-installation", title: "Villa Window Installation", category: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop", orientation: "portrait" },
  { id: "storefront-door-system", title: "Storefront Door System", category: "Doors", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop", orientation: "landscape" },
  { id: "residential-glass-partition", title: "Residential Glass Partition", category: "Residential", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=800&fit=crop", orientation: "portrait" },
  { id: "commercial-tower-windows", title: "Commercial Tower Windows", category: "Windows", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", orientation: "landscape" },
  { id: "luxury-home-doors", title: "Luxury Home Doors", category: "Doors", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop", orientation: "portrait" },
];

const filters = ["All", "Residential", "Commercial", "Doors", "Windows"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isVisible } = useScrollReveal();

  const filtered = activeFilter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">Our Work</span>
          <h2 className="section-heading">Projects That Speak For Themselves</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors min-h-[40px] ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
        {/* Filters - Improved mobile UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
        >
          {filters.map((f, i) => (
            <motion.button
              key={f}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveFilter(f)}
              className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all min-h-[40px] whitespace-nowrap ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid - Mobile first optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl overflow-hidden cursor-pointer h-[250px] md:h-[300px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={item.orientation === "portrait" ? 1000 : 600}
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                {/* Category Badge */}
                <div className="flex justify-start">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-foreground font-heading font-bold text-sm md:text-base mb-2">{item.title}</h3>
                  <a
                    href={`/project/${item.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-accent-hover font-semibold text-xs md:text-sm transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a
            href={buildWhatsAppLink(whatsappMessages.similar)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent-hover transition-colors font-semibold"
          >
            Have a Similar Project? → Let's Talk on WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-foreground p-2 min-w-[48px] min-h-[48px]" aria-label="Close">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-2 md:left-6 text-foreground p-2 min-w-[48px] min-h-[48px]"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-2 md:right-6 text-foreground p-2 min-w-[48px] min-h-[48px]"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={filtered[lightboxIndex].img}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
