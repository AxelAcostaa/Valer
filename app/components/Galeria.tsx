import { motion } from "framer-motion";
import Image from "next/image";

const COLORS = {
  brown: "#ffffff",
};

const galleryImages = [
    { src: "/Gallery1.jpg", alt: "Yoga en grupo" },
    { src: "/Gallery2.jpg", alt: "Meditación guiada" },
    { src: "/Gallery3.jpg", alt: "Comunidad reunida" },
    { src: "/Gallery4.jpg", alt: "Ambiente relajante" },
    { src: "/Gallery5.jpg", alt: "Sesión de coaching" },
    { src: "/Gallery6.jpg", alt: "Espacio de bienestar" },
  ];

const Galeria = () => (
  <section className="py-24 px-4 max-w-6xl mx-auto font-serif">
    <motion.h2
      className="text-3xl font-bold text-center mb-12 uppercase tracking-widest"
      style={{ color: COLORS.brown }}
    >
      Galería de Experiencias
    </motion.h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.map((img, i) => (
        <motion.div
          key={img.src}
          className="relative overflow-hidden rounded-xl shadow-lg aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Image
            src={img.src}
            alt={img.alt || 'Experiencia creativa en Valer'}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className="object-cover hover:scale-110 transition-transform duration-700"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Galeria;
