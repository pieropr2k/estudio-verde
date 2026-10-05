import { IconoImagen, IconoPersona } from "./Iconos.jsx";

// ===== FOTO =====
// Reserva el espacio con aspect-ratio (sin saltos de layout) y muestra la imagen.
// Si `src` está vacío, muestra un bloque de color suave en su lugar.
//   proporcion: clases de aspect-ratio de Tailwind (ej: "aspect-[4/3]")
//   tono: color de fondo del placeholder
//   prioridad: true solo para el hero (no usa lazy loading)
export default function Foto({
  src,
  alt,
  proporcion = "aspect-[4/3]",
  tono = "bg-arena",
  prioridad = false,
  retrato = false,
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${proporcion} ${tono} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={prioridad ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-bosque/60"
        >
          {retrato ? <IconoPersona className="h-8 w-8" /> : <IconoImagen className="h-8 w-8" />}
          <span className="text-sm">{retrato ? "Foto" : "Foto del proyecto"}</span>
        </div>
      )}
    </div>
  );
}
