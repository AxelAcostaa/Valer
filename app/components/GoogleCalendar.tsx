"use client";

const CALENDAR_SRC = "https://calendar.google.com/calendar/embed?src=tu_id_de_calendario%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires";

import LocationButton from './LocationButton';

export default function GoogleCalendar() {
  return (
    <section className="w-full max-w-xl mx-auto my-8 px-4">
      <h2 className="font-league-spartan text-lg font-bold mb-4 text-[#0A0079] text-center md:text-2xl md:mb-6">
        Próximas Experiencias
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
        <div
          className="rounded-3xl border-2 border-[#537EBC] shadow-lg overflow-hidden bg-white w-full md:w-[70%]"
        >
          <iframe
            src={CALENDAR_SRC}
            className="w-full h-64 md:h-96"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
            title="Calendario de Talleres Valer"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[30%] mt-4 md:mt-0">
          <LocationButton />
        </div>
      </div>
      <p className="mt-4 text-center text-[#537EBC] text-sm font-medium md:text-base">
        Sincroniza estos encuentros con tu comunidad
        <span className="block text-sm text-[#3B2A1A] font-normal mt-1">
          Valores: Autenticidad y Conexión
        </span>
      </p>
    </section>
  );
}
