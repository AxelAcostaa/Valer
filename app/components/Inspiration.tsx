import { motion } from "framer-motion";

const articles = [
  {
    title: "5 hábitos para el bienestar mental",
    excerpt: "Descubre prácticas sencillas para mejorar tu salud emocional cada día.",
    image: "/inspiration1.jpg",
  },
  {
    title: "La importancia de la comunidad",
    excerpt: "Conectar con otros es clave para el bienestar integral. Aprende cómo fortalecer tus lazos.",
    image: "/inspiration2.jpg",
  },
  {
    title: "Tips para una vida plena",
    excerpt: "Pequeños cambios que generan grandes resultados en tu día a día.",
    image: "/inspiration3.jpg",
  },
];

export default function Inspiration() {
  return (
    <section className="py-16 bg-[#F8F8FA]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#0A0079] text-center">Contenidos Inspiradores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(10,0,121,0.10)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col min-h-[320px]"
            >
              {art.image && (
                <div className="h-40 w-full bg-gray-100">
                  {/* Aquí podrías usar <Image> si tienes imágenes reales */}
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#0A0079]">{art.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{art.excerpt}</p>
                <a href="#" className="text-[#0A0079] font-semibold hover:underline mt-auto">Leer más</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
