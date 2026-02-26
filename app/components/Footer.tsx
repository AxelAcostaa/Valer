
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";

const COLORS = {
  accent: "#537EBC",
  brown: "#3B2A1A",
};

const Footer = () => (
  <footer id="contacto" className="py-20 bg-[#3B2A1A] text-white flex flex-col items-center font-sans">
    <h2 className="text-4xl font-bold mb-8 tracking-[0.4em]">VALER</h2>
    <div className="flex flex-col items-center gap-4 text-lg opacity-80">
      <p className="flex items-center gap-2">
        <MapPin className="w-6 h-6" />
        Ameghino 45
      </p>
      <p className="flex items-center gap-2">
        <Phone className="w-6 h-6" />
        (362) 433-0633
      </p>
      <a href="https://www.instagram.com/valerparavaler_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FD601C] transition-colors">
        <Instagram className="w-6 h-6" />
        @valerparavaler_
      </a>
    </div>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={`https://wa.me/5493624330633?text=${encodeURIComponent('¡Hola! Me gustaría participar en las actividades de Valer.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-12 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-colors"
      style={{ backgroundColor: COLORS.accent }}
    >
      Contáctanos
    </motion.a>
  </footer>
);

export default Footer;
