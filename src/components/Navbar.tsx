import { useState, useEffect } from "react";
import { Menu, X, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OrderFormModal from "./OrderFormModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="text-lg md:text-xl font-heading font-bold text-primary tracking-wide">
              ALUMCRAFT
            </span>
            <span className="text-[10px] text-silver tracking-[0.15em] uppercase -mt-1">
              Precision Aluminum
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-silver hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Order CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOrderOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition-colors min-h-[40px]"
            >
              <ClipboardList size={14} />
              Place Your Order
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-foreground min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-secondary/95 backdrop-blur-xl overflow-hidden border-b border-border"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-foreground text-lg py-2 border-b border-border/50 min-h-[48px] flex items-center"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <button
                  onClick={() => { setMenuOpen(false); setOrderOpen(true); }}
                  className="mt-2 bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold min-h-[48px] flex items-center justify-center gap-2"
                >
                  <ClipboardList size={16} />
                  Place Your Order
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <OrderFormModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};

export default Navbar;
