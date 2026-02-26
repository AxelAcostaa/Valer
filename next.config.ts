import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- Esta es la línea clave que te falta
  images: {
    unoptimized: true, // Necesario para que las imágenes funcionen en Firebase
  },
};

export default nextConfig;