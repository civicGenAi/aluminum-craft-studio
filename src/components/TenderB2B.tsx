import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Factory, FileText, ShieldCheck } from "lucide-react";

const values = [
  { icon: Factory, title: "High Capacity Output", desc: "We handle large-volume orders with consistent quality." },
  { icon: FileText, title: "Tender-Ready Documentation", desc: "Full project documentation for formal procurement." },
  { icon: ShieldCheck, title: "Commercial Grade Materials", desc: "Materials that meet international structural standards." },
];

const TenderB2B = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", company: "", phone: "", projectType: "Commercial Fit-out", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello! I'm ${form.name} from ${form.company}.\nPhone: ${form.phone}\nProject Type: ${form.projectType}\nDetails: ${form.message}`;
    window.open(buildWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="quote" className="section-padding bg-background border-t border-border" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">For Contractors & Developers</span>
          <h2 className="section-heading">Built for Large-Scale Projects</h2>
          <p className="section-subtitle mx-auto">We serve contractors, developers, and government tenders with capacity and professionalism.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Value points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 items-start bg-card p-5 rounded-lg border border-border"
              >
                <v.icon className="text-primary shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-4"
          >
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">Send a Formal Inquiry</h3>
            {[
              { label: "Full Name", key: "name", type: "text" },
              { label: "Company Name", key: "company", type: "text" },
              { label: "Phone Number", key: "phone", type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Project Type</label>
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
              >
                <option>Commercial Fit-out</option>
                <option>Residential Project</option>
                <option>Government Tender</option>
                <option>Custom Fabrication</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors min-h-[48px]"
            >
              Send via WhatsApp →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default TenderB2B;
