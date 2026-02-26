import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const categories = ["All", "Windows", "Doors", "Partitions", "Furniture"];

const products = [
  { name: "Sliding Window System", category: "Windows", tag: "Powder Coated Aluminum", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=500&fit=crop" },
  { name: "Casement Window Frame", category: "Windows", tag: "Anodized Aluminum", img: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&h=500&fit=crop" },
  { name: "Pivot Entry Door", category: "Doors", tag: "Heavy-Duty Aluminum", img: "https://images.unsplash.com/photo-1558618019-6be1e4e2f827?w=600&h=500&fit=crop" },
  { name: "Folding Glass Door", category: "Doors", tag: "Thermal Break System", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop" },
  { name: "Office Glass Partition", category: "Partitions", tag: "Tempered Glass + Aluminum", img: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=500&fit=crop" },
  { name: "Frameless Partition Wall", category: "Partitions", tag: "Minimal Aluminum Profile", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=500&fit=crop" },
  { name: "Display Shelving Unit", category: "Furniture", tag: "Brushed Aluminum", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop" },
  { name: "Executive Desk Frame", category: "Furniture", tag: "Powder Coated Finish", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=500&fit=crop" },
];

const ProductCatalog = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { ref, isVisible } = useScrollReveal();
  const filtered = activeTab === "All" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">Our Designs</span>
          <h2 className="section-heading">Browse. Choose. Request.</h2>
          <p className="section-subtitle mx-auto">Explore our catalog and request any design via WhatsApp — no prices, just consultation.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors min-h-[40px] ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-lg overflow-hidden bg-card border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
              {/* Info */}
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-heading font-bold text-foreground">{product.name}</h3>
                <span className="text-xs text-muted-foreground">{product.tag}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={buildWhatsAppLink(whatsappMessages.product(product.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full m-4 bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  Request This Design
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
