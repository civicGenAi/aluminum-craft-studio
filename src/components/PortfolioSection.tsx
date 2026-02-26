import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  { title: "Modern Office Fit-out", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", orientation: "landscape" },
  { title: "Villa Window Installation", category: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop", orientation: "portrait" },
  { title: "Storefront Door System", category: "Doors", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop", orientation: "landscape" },
  { title: "Residential Glass Partition", category: "Residential", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=800&fit=crop", orientation: "portrait" },
  { title: "Commercial Tower Windows", category: "Windows", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", orientation: "landscape" },
  { title: "Luxury Home Doors", category: "Doors", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop", orientation: "portrait" },
];

const filters = ["All", "Residential", "Commercial", "Doors", "Windows"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const filtered = activeFilter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeFilter);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  };

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
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-lg overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(i)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={item.orientation === "portrait" ? 1000 : 600}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold bg-background/80 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <p className="text-foreground font-heading font-bold mt-1">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
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
