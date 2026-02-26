import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Event {
  date: Date;
  name: string;
  time: string;
  professional: string;
}

const events: Event[] = [
  {
    date: new Date(2026, 1, 20),
    name: 'Taller de Mindfulness',
    time: '18:00',
    professional: 'Lic. Valeria Pérez',
  },
  {
    date: new Date(2026, 1, 22),
    name: 'Encuentro de Yoga',
    time: '10:00',
    professional: 'Prof. Juan Gómez',
  },
  // Agrega más eventos aquí
];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const CalendarSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [popoverEvent, setPopoverEvent] = useState<Event | null>(null);

  const handleDayClick = (value: Date) => {
    const event = events.find(e => isSameDay(e.date, value));
    setSelectedDate(value);
    setPopoverEvent(event || null);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#537EBC] font-serif">Talleres y Encuentros</h2>
      <div className="relative">
        <Calendar
          onClickDay={handleDayClick}
          tileContent={({ date, view }) => {
            if (view === 'month') {
              const event = events.find(e => isSameDay(e.date, date));
              return event ? (
                <div className="w-2 h-2 rounded-full bg-[#FD601C] mx-auto mt-1" />
              ) : null;
            }
            return null;
          }}
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              const event = events.find(e => isSameDay(e.date, date));
              if (event) {
                return 'font-sans text-[#FD601C]';
              }
              return 'font-sans';
            }
            return '';
          }}
          className="w-full font-sans"
        />
        {popoverEvent && selectedDate && isSameDay(popoverEvent.date, selectedDate) && (
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 mt-4 bg-white border border-[#537EBC] rounded-lg shadow-lg p-4 z-10 w-64">
            <h3 className="text-lg font-bold text-[#537EBC] font-serif mb-2">{popoverEvent.name}</h3>
            <p className="text-sm font-sans mb-1">Hora: <span className="text-[#FD601C]">{popoverEvent.time}</span></p>
            <p className="text-sm font-sans">Profesional: <span className="text-[#537EBC]">{popoverEvent.professional}</span></p>
            <button
              className="mt-2 px-3 py-1 bg-[#FD601C] text-white rounded font-sans text-sm"
              onClick={() => setPopoverEvent(null)}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
      <style jsx global>{`
        .react-calendar__month-view__weekdays {
          font-family: serif;
          font-size: 1rem;
        }
        .react-calendar__navigation__label {
          font-family: serif;
        }
        .react-calendar__tile {
          font-family: sans-serif;
        }
        .react-calendar__tile--active {
          background: #FD601C !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default CalendarSection;
