import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(43 52% 20%), hsl(43 52% 10%), hsl(0 0% 5.1%))",
      }}
    >
      <div className="absolute inset-0 gradient-shift" style={{
        background: "linear-gradient(135deg, hsl(43 52% 54.5% / 0.15), transparent, hsl(43 52% 54.5% / 0.08))",
        backgroundSize: "200% 200%",
      }} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Let's Build Together</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-4 leading-tight">
              Ready to Start<br />Your Project?
            </h2>
            <p className="text-silver text-sm md:text-base mb-8 max-w-md leading-relaxed">
              Get a free consultation — tell us what you need and we'll bring your vision to life with precision aluminum craftsmanship.
            </p>
            <a
              href={buildWhatsAppLink(whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-accent-hover transition-all min-h-[48px] shadow-lg hover:shadow-xl"
            >
              Chat With Us Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Newsletter Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background/40 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Stay Updated</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Get project inspiration, new product launches, and exclusive offers delivered to your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <p className="text-primary font-semibold">Thank you! You're on the list. ✓</p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-background/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors min-h-[48px] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
