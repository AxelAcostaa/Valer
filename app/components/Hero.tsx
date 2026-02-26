"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => (
  // Le saqué el bg-[#537EBC] para que no tape la foto
  <section id="inicio" className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-4 py-8 text-white font-sans overflow-hidden bg-[#3B2A1A] md:h-screen md:px-8">
    
    {/* --- IMAGEN DE FONDO Y OVERLAY OSCURO --- */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-hero.jpg')" }}
    />
    {/* Esta capita negra semitransparente (bg-black/40) hace que el logo blanco resalte siempre */}
    <div className="absolute inset-0 bg-black/40 z-0" />


    {/* --- PALABRAS EN LAS ESQUINAS --- */}
    
    {/* Arriba - Izquierda */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase z-10 md:top-16 md:left-16 md:gap-4 md:text-sm"
    >
      TALLERES <span className="hidden md:block w-12 md:w-24 h-[1px] bg-white/60"></span>
    </motion.div>

    {/* Arriba - Derecha */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute top-4 right-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase z-10 md:top-16 md:right-16 md:gap-4 md:text-sm"
    >
      <span className="hidden md:block w-12 md:w-24 h-[1px] bg-white/60"></span> EXPERIENCIAS
    </motion.div>

    {/* Abajo - Izquierda */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase z-10 md:bottom-16 md:left-16 md:gap-4 md:text-sm"
    >
      BIENESTAR <span className="hidden md:block w-12 md:w-24 h-[1px] bg-white/60"></span>
    </motion.div>

    {/* Abajo - Derecha */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase z-10 md:bottom-16 md:right-16 md:gap-4 md:text-sm"
    >
      <span className="hidden md:block w-12 md:w-24 h-[1px] bg-white/60"></span> NETWORKING
    </motion.div>

    {/* --- FIN PALABRAS EN LAS ESQUINAS --- */}


    {/* Logo Central */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="z-10 flex items-center justify-center w-full mt-12 md:mt-0"
    >
      <Image
        src="/logo.png"
        alt="Logo Valer"
        width={320}
        height={320}
        className="object-contain w-full max-w-xs md:max-w-lg brightness-0 invert"
        priority
      />
    </motion.div>

    {/* Subtítulo */}
    <motion.p
      className="text-lg text-center max-w-xs font-light tracking-wide opacity-90 mt-6 z-10 md:text-2xl md:max-w-2xl md:mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {/* Puedes agregar subtítulo aquí si lo necesitas */}
    </motion.p>
    
  </section>
);

export default Hero;