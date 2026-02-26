import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { Frame, DoorOpen, PanelTop, Armchair, Building2, Ruler } from "lucide-react";

const services = [
  { icon: Frame, title: "Custom Windows", desc: "Precision-engineered aluminum window systems tailored to your specifications." },
  { icon: DoorOpen, title: "Aluminum Doors", desc: "Sleek, durable doors for residential and commercial spaces." },
  { icon: PanelTop, title: "Glass Partitions", desc: "Modern glass and aluminum partition systems for offices and interiors." },
  { icon: Armchair, title: "Aluminum Furniture", desc: "Custom aluminum furniture pieces built for longevity and style." },
  { icon: Building2, title: "Commercial Fit-outs", desc: "Full-scale aluminum solutions for commercial buildings and developments." },
  { icon: Ruler, title: "Site Survey & Consultation", desc: "Professional on-site measurement and project consultation." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">End-to-End Aluminum Solutions</h2>
          <p className="section-subtitle mx-auto">From concept to installation, we deliver premium aluminum fabrication for every project.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card border-l-2 border-l-primary border border-border rounded-lg p-6 card-hover-lift"
            >
              <service.icon className="text-primary mb-4 group-hover:rotate-[5deg] transition-transform duration-300" size={28} strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
              <a
                href={buildWhatsAppLink(whatsappMessages.service(service.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-accent-hover transition-colors font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
