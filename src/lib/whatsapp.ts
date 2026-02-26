const WHATSAPP_NUMBER = "255700000000";

export const buildWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

export const whatsappMessages = {
  hero: "Hello! I'd like to start a project with your team. Can we discuss?",
  quote: "Hello! I found you on your website and I'd like to get a quote.",
  service: (name: string) => `Hello! I'm interested in your ${name} service. Can we talk?`,
  product: (name: string) => `Hello! I saw ${name} on your website and I'd like to request this design for my project.`,
  similar: "Hello! I saw a project on your portfolio and I'd like to discuss something similar.",
};
