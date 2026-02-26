import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.quote)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 rounded-full shadow-xl transition-all duration-300 min-w-[56px] min-h-[56px]"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative whatsapp-pulse flex items-center justify-center w-14 h-14 rounded-full" style={{ backgroundColor: "#25D366" }}>
        <MessageCircle size={26} className="text-foreground" fill="white" stroke="white" />
      </div>
      {hovered && (
        <span className="hidden md:inline pr-5 text-sm font-semibold text-foreground whitespace-nowrap">
          Chat With Us
        </span>
      )}
    </a>
  );
};

export default WhatsAppFloat;
