import { motion } from "framer-motion";

const COLORS = {
  accent: "#FD601C",
  deep: "#0A0079",
};

const Valores = () => (
  <section className="py-20 px-4 flex flex-col items-center bg-[#F3F6F9] font-serif">
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
      <motion.div
        className="flex-1 bg-white rounded-2xl shadow-sm p-10 text-center border-t-8"
        style={{ borderColor: COLORS.accent }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-bold mb-4 uppercase" style={{ color: COLORS.accent }}>Autenticidad y Conexión</h3>
        <p className="opacity-80">Generamos espacios genuinos donde las personas pueden compartir y sentirse escuchadas[cite: 20].</p>
      </motion.div>
      <motion.div
        className="flex-1 bg-white rounded-2xl shadow-sm p-10 text-center border-t-8"
        style={{ borderColor: COLORS.deep }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-bold mb-4 uppercase" style={{ color: COLORS.deep }}>Impacto Positivo</h3>
        <p className="opacity-80">Promovemos el bienestar integral y facilitamos recursos a coaches y profesionales de la salud[cite: 13, 22].</p>
      </motion.div>
    </div>
  </section>
);

export default Valores;
