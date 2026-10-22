import { useState } from "react";
import { ENDPOINT_CONSULTAS } from "../config.js";
import { IconoMail } from "./Iconos.jsx";

// ===== FORMULARIO DE CONTACTO =====
// Manda la consulta al Apps Script (ver apps-script/Code.gs), que deja un borrador de
// respuesta en Gmail para Paula y Martín. Nunca se envía nada solo: ellos revisan y mandan.
// La URL del script (ENDPOINT_CONSULTAS) sale de VITE_APPS_SCRIPT_URL en .env.local.
// Sin campos de presupuesto ni teléfono: no hay precios en la web.
const TIPOS = ["Arquitectura", "Paisajismo", "Las dos cosas", "No sé todavía"];

const campo =
  "mt-2 w-full rounded-2xl border border-bosque/20 bg-white px-4 py-3 text-base text-bosque placeholder:text-bosque/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-salvia/40";

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState(TIPOS[0]);
  const [mensaje, setMensaje] = useState("");
  const [trampa, setTrampa] = useState(""); // campo oculto: solo los bots lo completan
  const [estado, setEstado] = useState("inicial"); // inicial | enviando | enviado | error

  const alEnviar = async (e) => {
    e.preventDefault();
    if (estado === "enviando") return;

    // Sin URL cargada no se manda nada: se avisa en vez de abrir el programa de mail
    if (!ENDPOINT_CONSULTAS) {
      console.warn("[Estudio Verde] Falta VITE_APPS_SCRIPT_URL en .env.local");
      setEstado("error");
      return;
    }

    setEstado("enviando");
    try {
      // text/plain + no-cors: Apps Script no acepta el preflight de un JSON normal.
      // Por eso la respuesta es "opaca": si el pedido salió, lo damos por enviado.
      await fetch(ENDPOINT_CONSULTAS, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          tipo,
          consulta: mensaje.trim(),
          web: trampa,
        }),
      });
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  };

  if (estado === "enviado") {
    return (
      <div
        role="status"
        className="mx-auto max-w-2xl rounded-4xl bg-crema p-6 text-bosque sm:p-10"
      >
        <h3 className="font-serif text-3xl font-medium">¡Gracias, {nombre.trim()}!</h3>
        <p className="mt-2 text-bosque/85">
          Recibimos tu consulta. Te vamos a escribir a {email.trim()} lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={alEnviar}
      className="mx-auto max-w-2xl rounded-4xl bg-crema p-6 text-bosque sm:p-10"
    >
      <h3 className="font-serif text-3xl font-medium">O contanos tu idea acá</h3>
      <p className="mt-2 text-bosque/85">
        Completá estos datos y te respondemos por mail.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="block text-base font-medium">
          Tu nombre
          <input
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Cómo te llamás"
            className={campo}
          />
        </label>

        <label className="block text-base font-medium">
          Tu mail
          <input
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Para poder responderte"
            className={campo}
          />
        </label>

        <label className="block text-base font-medium">
          ¿Qué te interesa?
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={campo}>
            {TIPOS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block text-base font-medium">
          Contanos tu proyecto
          <textarea
            required
            rows={4}
            maxLength={2000}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Por ejemplo: quiero remodelar mi casa y armar un patio con plantas nativas"
            className={campo}
          />
        </label>

        {/* Campo trampa para bots: fuera de pantalla y sin foco. No tocar. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            No completar este campo
            <input
              type="text"
              name="web"
              tabIndex={-1}
              autoComplete="off"
              value={trampa}
              onChange={(e) => setTrampa(e.target.value)}
            />
          </label>
        </div>
      </div>

      {estado === "error" && (
        <p role="alert" className="mt-5 rounded-2xl bg-white px-4 py-3 text-base text-bosque">
          No pudimos enviar tu consulta. Probá de nuevo o escribinos por WhatsApp o mail, que
          estamos del otro lado.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="btn-principal mt-6 w-full disabled:opacity-60 sm:w-auto"
      >
        <IconoMail />
        {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
