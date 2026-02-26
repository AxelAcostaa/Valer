import Image from "next/image";
import Link from "next/link"; // Usar Link de Next.js es una mejor práctica para SEO y velocidad

export default function Navbar() {
  // Guardamos el mensaje en una variable para que el código quede más limpio
  const waMessage = encodeURIComponent('¡Hola! Me gustaría agendar una experiencia en Valer.');

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        
        {/* 1. LOGO: Tamaño controlado para evitar que se desborde */}
        <Link href="#inicio" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Logo Valer, marca Valer" 
            width={120} 
            height={40} 
            priority 
            className="h-8 w-auto sm:h-10 object-contain" 
          />
        </Link>

        {/* 2. LINKS Y BOTÓN: Adaptables a pantallas chicas y grandes */}
        <div className="flex items-center gap-4 sm:gap-8">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              href="#inicio" 
              className="text-sm sm:text-base font-medium text-gray-700 hover:text-[#537EBC] transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="#contacto" 
              className="text-sm sm:text-base font-medium text-gray-700 hover:text-[#537EBC] transition-colors"
            >
              Contacto
            </Link>
          </div>
          
          <a
            href={`https://wa.me/5493624330633?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 3. BOTÓN: Efecto de elevación al hacer hover y color integrado a Tailwind */}
            <button className="bg-[#537EBC] hover:bg-[#43679c] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
              Agendar
            </button>
          </a>

        </div>
      </div>
    </nav>
  );
}