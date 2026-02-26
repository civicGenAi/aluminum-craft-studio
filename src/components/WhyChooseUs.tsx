import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Precision Measurement", desc: "Every project starts with accurate on-site surveys." },
  { title: "Quality Materials", desc: "We source only premium-grade aluminum profiles." },
  { title: "Fast Project Turnaround", desc: "Efficient workflows keep your project on schedule." },
  { title: "Fully Site-Based Service", desc: "From fabrication to installation — we handle it all." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-surface-light relative overflow-hidden" ref={ref}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-heading">Built Different. Delivered Better.</h2>
            <p className="section-subtitle text-silver">
              We don't just fabricate aluminum — we craft solutions that last. Every project is handled with precision, care, and professional expertise from start to finish.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 items-start"
              >
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={22} />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
