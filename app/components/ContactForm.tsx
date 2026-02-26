"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  interes: z.enum(["Taller", "Kit", "Consulta Profesional"]),
});

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", interes: "Taller" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
   const result = schema.safeParse(form);
    if (!result.success) {
      // Usamos '.issues', que es la propiedad correcta en Zod
      const message = result.error?.issues?.[0]?.message ?? "Error de validación";
      toast.error(message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Gracias por conectar con Valer");
      setForm({ nombre: "", email: "", interes: "Taller" });
    }, 1200);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#3B2A1A]">Contacto</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100"
        >
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD601C] text-base"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD601C] text-base"
            required
          />
          <select
            name="interes"
            value={form.interes}
            onChange={handleChange}
            className="rounded-full border border-gray-200 px-5 py-3 text-base"
          >
            <option value="Taller">Taller</option>
            <option value="Kit">Kit</option>
            <option value="Consulta Profesional">Consulta Profesional</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="rounded-full px-6 py-3 font-semibold text-white text-base shadow transition-all duration-200"
            style={{ background: "#FD601C", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
