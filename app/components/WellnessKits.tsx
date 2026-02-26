import { motion } from "framer-motion";


export default function WellnessKits() {
  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-white">
      <motion.div
        whileHover={{ y: -10, boxShadow: "0 8px 32px 0 rgba(253,96,28,0.15)", filter: "brightness(1.05)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-2xl border border-gray-200 shadow-md bg-white max-w-sm w-full"
      >
        <div className="bg-white rounded-2xl border-0 p-6 flex flex-col">
          <div className="text-2xl font-bold mb-4 text-gray-900 text-center">
            Kit para cocinar con amor
          </div>
          <ul className="text-gray-700 text-base space-y-2 mb-6 list-disc list-inside">
            <li>Botella de agua</li>
            <li>Cucharas de madera</li>
            <li>Cepillo</li>
            <li>Bloque de jabón</li>
            <li>Tabla de cortar</li>
          </ul>
          <div className="flex justify-center pb-2">
            <button
              className="px-6 py-2 rounded-full text-white font-semibold shadow transition-all duration-200"
              style={{ background: "#FD601C" }}
            >
              Comprar Kit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
