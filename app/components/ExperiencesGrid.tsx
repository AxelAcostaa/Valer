"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, MessageCircle, X } from "lucide-react";

// --- EL CALENDARIO DE EXPERIENCIAS VALER (ORDEN ESTRICTO) ---
const EXPERIENCIAS = [
  {
    id: 1,
    tituloTarjeta: "06 Mar",
    tituloModal: "Estrategias científicas",
    descripcion: "Pasar de la reacción a la acción consciente mediante hábitos cognitivos.",
    imagen: "/FLYERS5.jpg", 
    tipo: "descarga",
    link: "/Neuroherramientas.docx",
  },
  {
    id: 2,
    tituloTarjeta: "07 Mar",
    tituloModal: "Pinta y llévate maceta",
    descripcion: "Experiencia creativa para pintar, relajar y llevarte tu propia maceta decorada.",
    imagen: "/FLYERS8.jpg",
    tipo: "whatsapp",
    link: "¡Hola! Quiero pedir más info sobre el taller 'Pinta y llévate maceta' del 07 de marzo.",
  },
  {
    id: 3,
    tituloTarjeta: "07 Mar",
    tituloModal: "Skincare consciente",
    descripcion: "Experiencia de bienestar y educación para promover el autocuidado.",
    imagen: "/FLYERS13.jpg",
    tipo: "descarga",
    link: "/Taller de Skincare Consciente.docx",
  },
  {
    id: 4,
    tituloTarjeta: "08 Mar",
    tituloModal: "Día de la mujer",
    descripcion: "Encuentro especial conmemorativo por el Día de la Mujer en Valer.",
    imagen: "/FLYERS9.jpg",
    tipo: "whatsapp",
    link: "¡Hola! Quiero info sobre el evento del Día de la Mujer del 08 de marzo.",
  },
  {
    id: 5,
    tituloTarjeta: "14 Mar",
    tituloModal: "Taller de acuarelas botánica",
    descripcion: "Estilo libre y relajado para expresarte a través del agua y el color.",
    imagen: "/FLYERS6.jpg",
    tipo: "descarga",
    link: "/Acuarela suelta.docx",
  },
  {
    id: 6,
    tituloTarjeta: "15 Mar",
    tituloModal: "Vino y pinta",
    descripcion: "Taller de arte relajado, acompañado de una buena copa de vino.",
    imagen: "/FLYERS7.jpg",
    tipo: "whatsapp",
    link: "¡Hola! Quiero info sobre el encuentro 'Vino y pinta' del 15 de marzo.",
  },
  {
    id: 7,
    tituloTarjeta: "21 Mar",
    tituloModal: "Seminario de liderazgo",
    descripcion: "Herramientas de comunicación estratégica y gestión emocional para líderes.",
    imagen: "/FLYERS10.jpg",
    tipo: "descarga",
    link: "/Seminario de Liderazgo Organizacional.docx",
  },
  {
    id: 8,
    tituloTarjeta: "22 Mar",
    tituloModal: "Pinta y decora",
    descripcion: "Taller para pintar y decorar cuadros en familia (con tu hijo o nieto).",
    imagen: "/FLYERS3.jpg",
    tipo: "whatsapp",
    link: "¡Hola! Quiero info sobre el taller 'Pinta y decora' del 22 de marzo.",
  },
  {
    id: 9,
    tituloTarjeta: "27 Mar",
    tituloModal: "Coffee Encuentro",
    descripcion: "Espacio de encuentro, charla y conexión acompañado de un rico café.",
    imagen: "/FLYERS2.jpg",
    tipo: "whatsapp",
    link: "¡Hola! Quiero info sobre el Coffee Encuentro del 27 de marzo.",
  },
  {
    id: 10,
    tituloTarjeta: "28 Mar",
    tituloModal: "Taller de retrato de mascotas",
    descripcion: "Técnicas de sombreado y texturas enfocadas en aprender a retratar a tu mascota.",
    imagen: "/FLYERS11.jpg",
    tipo: "descarga",
    link: "/Clases de dibujo.docx",
  },
  {
    id: 11,
    tituloTarjeta: "Próximamente",
    tituloModal: "Nuevas experiencias",
    descripcion: "Consultanos por nuevas fechas y talleres disponibles en el espacio.",
    imagen: "/PASEVALER.png",
    tipo: "whatsapp",
    link: "¡Hola! Quería consultar por las próximas experiencias de Valer.",
  },
];

export default function ExperiencesGrid() {
  const [selected, setSelected] = useState<typeof EXPERIENCIAS[0] | null>(null);
  const whatsappNumber = "5493624330633";

  return (
    <section className="w-full py-12 relative">
      {/* Título exterior ahora en blanco */}
      <h2 className="text-center text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-12">
        Experiencias Valer
      </h2>

      {/* --- LA GRILLA EXTERIOR --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 max-w-7xl mx-auto">
        {EXPERIENCIAS.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ y: -5 }}
            className="cursor-pointer rounded-[32px] overflow-hidden shadow-xl bg-white flex flex-col h-[400px]"
            onClick={() => setSelected(exp)}
          >
            {/* Foto del Flyer */}
            <div className="relative h-[70%] w-full bg-gray-100">
              <Image 
                src={exp.imagen} 
                alt={exp.tituloModal} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 25vw" 
                unoptimized={true}
              />
            </div>
            {/* Caja blanca inferior */}
            <div className="h-[30%] bg-white flex flex-col items-center justify-center p-4">
              <h3 className="text-xl font-bold text-[#3B2A1A] text-center mb-1">
                {exp.tituloTarjeta}
              </h3>
              <p className="text-[#537EBC] text-sm font-medium transition-colors">
                Ver detalles &rarr;
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LA VENTANITA MODAL --- */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelected(null)} 
              className="absolute inset-0 bg-[#3B2A1A]/80 backdrop-blur-sm" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl flex flex-col z-10" 
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-4 right-4 z-50 text-gray-400 hover:text-gray-800 transition-colors" 
              >
                <X size={24} />
              </button>

              {/* Flyer entero */}
              <div className="relative w-full h-[300px] bg-white p-4">
                <Image 
                  src={selected.imagen} 
                  alt={selected.tituloModal} 
                  fill 
                  className="object-contain p-2" 
                  priority 
                  unoptimized={true}
                />
              </div>

              {/* Textos y Botones */}
              <div className="p-8 text-center flex flex-col items-center gap-4 bg-white">
                {/* Título interior ahora en negro puro */}
                <h3 className="text-3xl font-bold text-black">
                  {selected.tituloModal}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                  {selected.descripcion}
                </p>

                {/* Ambos botones ahora en celeste oficial Valer (#537EBC) */}
                {selected.tipo === "descarga" ? (
                  <a 
                    href={selected.link} 
                    download 
                    className="w-full bg-[#537EBC] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#3f649b] transition-all shadow-lg active:scale-95" 
                  >
                    <Download size={20} />
                    Descargar info completa
                  </a>
                ) : (
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(selected.link)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-[#537EBC] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#3f649b] transition-all shadow-lg active:scale-95" 
                  >
                    <MessageCircle size={20} />
                    Más información
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}