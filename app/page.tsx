"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from './components/Hero';
import Mission from './components/Mission';
import PaseValer from './components/PaseValer'; 
import BeneficiosPase from './components/BeneficiosPase';
import PresentaProyecto from './components/PresentaProyecto';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExperiencesGrid from './components/ExperiencesGrid';
import LocationButton from './components/LocationButton'; 

export default function Home() {
  return (
    <main className="min-h-screen w-full text-white overflow-x-hidden relative">
      
      {/* 1. CAPA DE FONDO FIJA */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo-hero.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. CONTENIDO DE LA PÁGINA */}
      <div className="relative z-10 flex flex-col gap-0">
        <Navbar />
        
        <section id="inicio">
          <Hero />
        </section>

        <Mission />
        <PaseValer />
        <BeneficiosPase />
        <PresentaProyecto />
        
        <div className="bg-transparent">
          <Galeria />
        </div>
        
        <div className="py-24 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto px-6 bg-transparent">
          <div className="w-full lg:w-3/4">
            <ExperiencesGrid />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <LocationButton />
          </div>
        </div>
      </div>
      
      <footer id="contacto" className="relative z-10">
        <Footer />
      </footer>
    </main>
  );
}