"use client";
import { motion } from "framer-motion";

export default function PresentaProyecto() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#537EBC]">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-white text-4xl md:text-6xl font-black mb-10 text-center"
      >
        PRESENTÁ TU PROYECTO
      </motion.h2>
      <motion.a
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSex-m7QqG3nk--9136Yt9MlDb_lrWduRYBQrrDNWYkR9meXBQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#537EBC] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition"
      >
        Ir al Formulario
      </motion.a>
    </section>
  );
}
