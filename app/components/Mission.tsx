"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    // min-h-screen asegura que ocupe toda la pantalla. 
    <section className="bg-[#3B2A1A] text-white min-h-screen flex flex-col justify-between p-8 md:p-16 font-sans">
      
      {/* --- BARRA SUPERIOR --- */}
      <div className="flex items-center justify-between text-xs md:text-sm tracking-widest font-semibold uppercase">
        <span>Bienestar</span>
        {/* La línea central que se estira automáticamente */}
        <div className="hidden md:block flex-1 h-[1px] bg-white/30 mx-8 md:mx-16"></div>
        <span>Valer para valer</span>
      </div>

      {/* --- CONTENIDO CENTRAL --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 my-16 md:my-0 flex-1">
        
        {/* Título Grande */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Solo se anima la primera vez que bajás
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight w-full md:w-1/2"
        >
          ¿Qué es Valer?
        </motion.h2>

        {/* Párrafo Descriptivo */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light w-full md:w-1/2 opacity-90"
        >
          Valer es un espacio para profesionales y emprendedores del
          bienestar que quieren convertir sus ideas en experiencias
          reales. Abrimos nuestras puertas a talleres y encuentros con
          propósito, brindando el lugar, el acompañamiento y la difusión.
          Vos traés la idea, nosotros te ayudamos a hacerla realidad.
        </motion.p>
      </div>

      {/* --- BARRA INFERIOR --- */}
      <div className="flex items-center justify-between text-xs md:text-sm tracking-widest font-semibold uppercase">
        <span>Resistencia Chaco</span>
        <div className="hidden md:block flex-1 h-[1px] bg-white/30 mx-8 md:mx-16"></div>
        <span>Espacio Recreativo</span>
      </div>

    </section>
  );
}