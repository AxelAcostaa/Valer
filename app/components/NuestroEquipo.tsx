import { User, HeartPulse } from "lucide-react";

const team = [
  {
    name: "Lucía",
    role: "Psicóloga entusiasta del bienestar emocional.",
    icon: <HeartPulse size={36} className="text-[#537EBC]" />,
  },
  {
    name: "Diego",
    role: "Nutricionista deportivo que busca transformar la relación con la comida.",
    icon: <User size={36} className="text-[#FD601C]" />,
  },
];

export default function NuestroEquipo() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f8fafc]/60 to-[#e0e7ef]/80">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#0A0079]">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-3xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden"
              style={{ boxShadow: "0 8px 32px 0 rgba(83,126,188,0.10)" }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl z-0" />
              <div className="relative z-10 mb-4">{member.icon}</div>
              <h3 className="font-league-spartan text-2xl font-bold mb-2 text-[#3B2A1A]">{member.name}</h3>
              <p className="text-gray-700 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
