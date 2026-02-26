"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BeneficiosPase() {
  const beneficios = [
    "Acceso a todas las Experiencias Valer (talleres creados y brindados solo por Valer Espacio)",
    "Descuento exclusivo en talleres dictados por otros profesionales",
    "Prioridad en inscripciones y propuestas del espacio",
    "Formar parte de la Comunidad Valer de Whatsapp (con beneficios y experiencias pensadas para miembros)",
    "Kit simbólico de bienvenida (digital o físico)",
  ];

  return (
    <section className="bg-[#537EBC] text-white py-16 md:py-24 px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* --- LADO IZQUIERDO: Texto y Lista --- */}
        <div className="w-full lg:w-2/3 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-10 tracking-tight"
          >
            Beneficios
          </motion.h2>

          <ul className="space-y-6 mb-12">
            {beneficios.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 text-sm md:text-lg font-medium leading-tight"
              >
                {/* El puntito de la lista */}
                <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Valor y CTA */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8">
            <div className="text-2xl md:text-3xl font-bold">
              VALOR: <span className="opacity-90">$50.000</span>
            </div>
            <a
              href={`https://wa.me/5493624330633?text=${encodeURIComponent('¡Hola! Quiero ser parte de algún taller de Valer.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-black underline underline-offset-8 hover:text-[#3B2A1A] transition-colors"
            >
              QUIERO SER PARTE
            </a>
          </div>
        </div>

        {/* --- LADO DERECHO: La Credencial --- */}
        <motion.div 
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px]">
            <Image
              src="/123.jpg"
              alt="Credencial Pase Valer, experiencia de membresía"
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}