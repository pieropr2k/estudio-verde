import { enlace } from "../config.js";
import { IconoWhatsApp } from "./Iconos.jsx";

export default function BotonWhatsApp() {
  return (
    <>
      {/* ===== BOTÓN FLOTANTE DE WHATSAPP ===== */}
      {/* Fijo abajo a la derecha en toda la web. Usa el verde de la marca, no el
          verde flúor de WhatsApp. La clase .flotante respeta el safe-area (index.css). */}
      <a
        {...enlace("whatsapp")}
        aria-label="Escribinos por WhatsApp"
        className="flotante fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-bosque text-crema shadow-lg shadow-bosque/20 ring-2 ring-crema transition-colors duration-200 hover:bg-salvia-oscuro"
      >
        <IconoWhatsApp className="h-7 w-7" />
      </a>
    </>
  );
}
