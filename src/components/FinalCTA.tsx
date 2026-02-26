import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(43 52% 20%), hsl(43 52% 10%), hsl(0 0% 5.1%))",
        backgroundSize: "200% 200%",
      }}
    >
      <div className="absolute inset-0 gradient-shift" style={{
        background: "linear-gradient(135deg, hsl(43 52% 54.5% / 0.15), transparent, hsl(43 52% 54.5% / 0.08))",
        backgroundSize: "200% 200%",
      }} />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading text-foreground">Ready to Start Your Project?</h2>
          <p className="section-subtitle mx-auto mb-8 text-silver">
            Get a free consultation — tell us what you need.
          </p>
          <a
            href={buildWhatsAppLink(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-base hover:bg-accent-hover transition-colors min-h-[48px]"
          >
            Chat With Us Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
