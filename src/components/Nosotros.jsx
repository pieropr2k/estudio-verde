import { FOTOS_EQUIPO } from "../data/proyectos.js";
import Aparecer from "./Aparecer.jsx";
import Foto from "./Foto.jsx";

// Textos propuestos: los valida Paula.
// Sin datos inventados (años, cantidad de obras, premios, estudios).
const EQUIPO = [
  {
    nombre: "Paula",
    rol: "Arquitecta",
    texto: "Se ocupa del proyecto y de la obra.",
    foto: FOTOS_EQUIPO.paula,
    tono: "bg-terracota-claro",
  },
  {
    nombre: "Martín",
    rol: "Paisajista",
    texto: "Se ocupa de los jardines, las terrazas y los patios.",
    foto: FOTOS_EQUIPO.martin,
    tono: "bg-salvia-claro",
  },
];

export default function Nosotros() {
  return (
    <>
      {/* ===== SECCIÓN: NOSOTROS ===== */}
      <section id="nosotros" className="bg-salvia-claro py-16 lg:py-24">
        <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <Aparecer>
            <p className="etiqueta">Nosotros</p>
            <h2 className="titulo mt-3">Somos Paula y Martín</h2>
            <p className="mt-5 max-w-md text-lg font-light text-bosque/85">
              Somos hermanos y un estudio chico. Cuando nos escribís, hablás directamente con
              nosotros, y te acompañamos durante todo el proyecto.
            </p>
            <p className="mt-4 max-w-md text-lg font-light text-bosque/85">
              Nos une una misma idea: que cada espacio se lleve bien con su entorno.
            </p>
          </Aparecer>

          <ul className="grid grid-cols-2 gap-4 sm:gap-6">
            {EQUIPO.map((persona) => (
              <Aparecer as="li" key={persona.nombre}>
                <Foto
                  src={persona.foto.src}
                  alt={persona.foto.alt}
                  proporcion="aspect-[3/4]"
                  tono={persona.tono}
                  retrato
                />
                <h3 className="mt-4 font-serif text-2xl font-medium sm:text-3xl">{persona.nombre}</h3>
                <p className="etiqueta mt-1">{persona.rol}</p>
                <p className="mt-2 text-sm text-bosque/85 sm:text-base">{persona.texto}</p>
              </Aparecer>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
