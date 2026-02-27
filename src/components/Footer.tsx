import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

const services = [
  "Custom Windows",
  "Aluminum Doors",
  "Glass Partitions",
  "Aluminum Furniture",
  "Commercial Fit-outs",
  "Site Survey",
];

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-secondary">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto px-4 pt-14 md:pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 mb-12 md:mb-16">
          {/* Brand — takes more space */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-heading font-bold text-primary tracking-wide">ALUMCRAFT</span>
              <span className="text-[10px] text-silver tracking-[0.15em] uppercase mt-0.5">Precision Aluminum</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mb-6">
              Tanzania's premier aluminum fabrication & installation company. From custom designs to full commercial fit-outs.
            </p>
            {/* Social / trust badge placeholder */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-primary/60 font-medium">Built for excellence</span>
              <div className="flex-1 h-px bg-border max-w-[60px]" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-5 font-semibold">Navigate</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-5 font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-5 font-semibold">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={buildWhatsAppLink(whatsappMessages.quote)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-medium text-foreground/80">+255 700 000 000</span>
                    <span className="text-[11px]">WhatsApp available</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>info@alumcraft.co.tz</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">Arusha, Tanzania</span>
                  <span className="text-[11px]">Serving nationwide</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} AlumCraft. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
