import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default FloatingWhatsApp;
