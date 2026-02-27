import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { Frame, DoorOpen, PanelTop, Armchair, Building2, Ruler, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Frame,
    title: "Custom Windows",
    desc: "Precision-engineered aluminum window systems tailored to your exact specifications and architectural vision.",
    features: ["Sliding & Casement", "Powder Coated", "Sound Insulation"],
  },
  {
    icon: DoorOpen,
    title: "Aluminum Doors",
    desc: "Sleek, durable entrance systems for residential and commercial spaces that make a lasting impression.",
    features: ["Bi-fold & Pivot", "Security Grade", "Custom Finishes"],
  },
  {
    icon: PanelTop,
    title: "Glass Partitions",
    desc: "Modern glass and aluminum partition systems that transform offices and interiors with elegance.",
    features: ["Frameless Options", "Acoustic Rated", "Office Ready"],
  },
  {
    icon: Armchair,
    title: "Aluminum Furniture",
    desc: "Custom aluminum furniture pieces built for longevity, style, and modern living spaces.",
    features: ["Bespoke Design", "Weather Proof", "Modular"],
  },
  {
    icon: Building2,
    title: "Commercial Fit-outs",
    desc: "Full-scale aluminum solutions for commercial buildings, developments, and large-scale projects.",
    features: ["Tender Ready", "Bulk Capacity", "On-site Install"],
  },
  {
    icon: Ruler,
    title: "Site Survey",
    desc: "Professional on-site measurement and project consultation to ensure perfect execution.",
    features: ["Free Estimate", "3D Planning", "Fast Turnaround"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">End-to-End Aluminum<br className="hidden md:block" /> Solutions</h2>
          <p className="section-subtitle mx-auto">From concept to installation, we deliver premium aluminum fabrication for every project.</p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;
            const isFeatured = i === 0 || i === 4;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 cursor-pointer ${
                  isFeatured ? "md:row-span-2" : ""
                }`}
              >
                {/* Gold accent line at top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />

                <div className={`p-6 md:p-8 flex flex-col h-full ${isFeatured ? "md:justify-between md:min-h-[320px]" : "min-h-[200px]"}`}>
                  {/* Icon + Number */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <service.icon className="text-primary" size={24} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-5xl font-heading font-extrabold text-foreground/[0.04] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((f) => (
                      <span key={f} className="text-[10px] uppercase tracking-wider text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <a
                    href={buildWhatsAppLink(whatsappMessages.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent-hover transition-colors font-semibold group/link"
                  >
                    Get Started
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: "radial-gradient(circle at 50% 0%, hsl(43 52% 54.5% / 0.06), transparent 60%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
