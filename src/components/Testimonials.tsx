import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AlumCraft transformed our office space with stunning glass partitions. The precision and professionalism were outstanding from start to finish.",
    name: "James Mollel",
    project: "Commercial Fit-out",
    stars: 5,
  },
  {
    quote: "We hired them for our entire residential window and door installation. Every piece was custom-fitted perfectly. Highly recommend their team.",
    name: "Amina Hassan",
    project: "Residential Project",
    stars: 5,
  },
  {
    quote: "As a contractor, I need reliable partners. AlumCraft delivers on time, every time, with materials that exceed expectations. A true professional outfit.",
    name: "David Kimaro",
    project: "Government Tender",
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-surface-light" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible scrollbar-none">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[280px] md:min-w-0 snap-center bg-card border border-border rounded-lg p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm text-silver flex-1 mb-4 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
