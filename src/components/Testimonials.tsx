import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "AlumCraft transformed our office with stunning glass partitions. Outstanding precision.", name: "James Mollel", project: "Commercial Fit-out", stars: 5 },
  { quote: "Custom-fitted windows and doors for our home. Every piece was perfect.", name: "Amina Hassan", project: "Residential", stars: 5 },
  { quote: "Reliable partners who deliver on time with materials that exceed expectations.", name: "David Kimaro", project: "Government Tender", stars: 5 },
  { quote: "Attention to detail and customer service exceeded our expectations entirely.", name: "Sarah Williams", project: "Modern Villa", stars: 5 },
  { quote: "Professional team, on-time delivery, exceptional quality. Couldn't ask for more.", name: "Mohammed Ahmed", project: "Office Expansion", stars: 5 },
  { quote: "From consultation to installation, everything was smooth and professional.", name: "Lisa Chen", project: "Home Renovation", stars: 5 },
  { quote: "The best aluminum fabrication team we've worked with in East Africa.", name: "Robert Mwangi", project: "Hotel Build", stars: 5 },
  { quote: "Impeccable craftsmanship. Our storefront looks absolutely stunning.", name: "Grace Ndung'u", project: "Retail Space", stars: 5 },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4);

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[360px] bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/30 transition-colors duration-300">
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: t.stars }).map((_, j) => (
        <Star key={j} size={12} className="text-primary fill-primary" />
      ))}
    </div>
    <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">"{t.quote}"</p>
    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
        {t.name.charAt(0)}
      </div>
      <div>
        <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
        <p className="text-[11px] text-muted-foreground">{t.project}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-light overflow-hidden" ref={ref}>
      <div className="container mx-auto mb-10 md:mb-14">
        <div className="text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>
      </div>

      {/* Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* Row 1 — scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track animate-marquee-left">
            {[...row1, ...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (desktop only, mobile shows row 1 only) */}
        <div className="marquee-row hidden md:block">
          <div className="marquee-track animate-marquee-right">
            {[...row2, ...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
