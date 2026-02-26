import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo Valer, marca Valer" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
        </div>
        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#inicio" className="font-zt-neue text-[#3B2A1A] text-base hover:underline transition">Inicio</a>
          <a href="#contacto" className="font-zt-neue text-[#3B2A1A] text-base hover:underline transition">Contacto</a>
          <a
            href={`https://wa.me/5493624330633?text=${encodeURIComponent('¡Hola! Me gustaría agendar una experiencia en Valer.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-2 px-5 py-2 rounded-full font-semibold text-white" style={{background:'#537EBC'}}>Agendar</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
