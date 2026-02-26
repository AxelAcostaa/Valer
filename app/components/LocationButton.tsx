"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function LocationButton() {
  // Enlace directo a Google Maps con la dirección exacta de Valer
  const mapUrl = "https://www.google.com/maps/place/Ameghino+45,+Resistencia,+Chaco";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      // Diseño de la tarjeta que combina con el estilo de las experiencias
      className="bg-[#FDFCF7] rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full justify-center text-center relative overflow-hidden"
    >
      {/* Decoración de fondo suave */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#537EBC] rounded-full opacity-5 blur-2xl"></div>

      {/* Ícono de Ubicación */}
      <div className="mx-auto w-16 h-16 bg-[#537EBC]/10 rounded-full flex items-center justify-center mb-6">
        <MapPin className="text-[#0A0079] w-8 h-8" />
      </div>
      
      <h3 className="text-3xl font-bold text-[#0A0079] mb-3" style={{ fontFamily: 'League Spartan, sans-serif' }}>
        Nuestra Sede
      </h3>
      
      {/* La dirección que me pediste */}
      <div className="mb-8">
        <p className="text-[#3B2A1A] font-bold text-xl mb-1">
          Ameghino 45
        </p>
        <p className="text-[#537EBC] text-sm font-semibold uppercase tracking-widest">
          Resistencia, Chaco
        </p>
      </div>

      {/* Botón Naranja de "Cómo llegar" */}
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto group flex items-center justify-center gap-3 bg-[#537EBC] text-white px-6 py-4 rounded-full font-bold hover:bg-[#3f649b] transition-all shadow-md hover:shadow-xl w-full"
      >
        <span>Ver en Google Maps</span>
        <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}