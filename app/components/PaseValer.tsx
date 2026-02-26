"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PaseValer() {
  return (
    <section className="bg-[#3B2A1A] text-white py-16 md:py-24 px-6 md:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* --- COLUMNA IZQUIERDA --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // CAMBIO AQUÍ: Agregamos 'items-center text-center' para móvil y 'md:items-start md:text-left' para escritorio.
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Logo de Valer */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Logo Valer, marca Valer"
              width={160}
              height={54}
              style={{ width: 'auto', height: 'auto' }}
              className="brightness-0 invert object-contain"
            />
          </div>

          {/* Título Principal */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'League Spartan, sans-serif' }}
          >
            Pase Valer
          </h2>
          
          {/* Párrafo Descriptivo */}
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-lg font-light">
            El Pase Valer es una membresía que te da acceso exclusivo a experiencias, beneficios y propuestas especiales dentro de la comunidad Valer.
          </p>
        </motion.div>

        {/* --- COLUMNA DERECHA: Imagen --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/PASEVALER.png"
            alt="Comunidad Valer compartiendo, experiencia Valer"
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className="object-cover"
          />
        </motion.div>
        
      </div>
    </section>
  );
}