import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface OrderFormModalProps {
  open: boolean;
  onClose: () => void;
}

const projectTypes = [
  "Custom Windows",
  "Aluminum Doors",
  "Glass Partitions",
  "Aluminum Furniture",
  "Commercial Fit-out",
  "Full Project",
  "Other",
];

const OrderFormModal = ({ open, onClose }: OrderFormModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", projectType: "", message: "" });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Order Received!</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">Place Your Order</h3>
                  <p className="text-sm text-muted-foreground">Fill in the details and we'll prepare your quote.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Phone *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+255 700 000 000"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Project Type *</label>
                    <select
                      required
                      value={form.projectType}
                      onChange={(e) => handleChange("projectType", e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary min-h-[48px] appearance-none"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Project Details</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-sm hover:bg-accent-hover transition-colors min-h-[48px]"
                  >
                    Submit Order Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderFormModal;
