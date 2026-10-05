import { NOMBRE_ESTUDIO } from "../config.js";

// ===== LOGO =====
// Hoy no hay logo: el nombre tipografiado en serif hace de logo.
// Cuando Paula tenga uno, se reemplaza el <span> por un <img> acá
// y se actualiza solo en el header y en el footer.
export default function Logo({ className = "" }) {
  return (
    <a
      href="#inicio"
      className={`inline-flex min-h-[44px] items-center font-serif font-medium tracking-wide ${className}`}
    >
      <span>{NOMBRE_ESTUDIO}</span>
    </a>
  );
}
