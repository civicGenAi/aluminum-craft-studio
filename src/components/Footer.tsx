import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

const footerServices = [
  "Custom Windows",
  "Aluminum Doors",
  "Glass Partitions",
  "Aluminum Furniture",
  "Commercial Fit-outs",
];

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-secondary">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-heading font-bold text-primary">ALUMCRAFT</span>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
              Precision aluminum fabrication and installation across Tanzania.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-4 font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={buildWhatsAppLink(whatsappMessages.quote)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +255 700 000 000
                </a>
              </li>
              <li>info@alumcraft.co.tz</li>
              <li>Arusha, Tanzania</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} AlumCraft. All rights reserved.</span>
          <span className="mt-1 sm:mt-0">Built for excellence.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
