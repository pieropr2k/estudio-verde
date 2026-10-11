import Aparecer from "./Aparecer.jsx";
import { IconoBrote, IconoCasa, IconoHoja } from "./Iconos.jsx";

// Textos propuestos: los valida Paula.
// Los dos bloques usan la misma tarjeta, mismo tamaño y mismo peso.
// Arquitectura va primero a propósito: "no somos solo los de las plantas".
const SERVICIOS = [
  {
    Icono: IconoCasa,
    titulo: "Arquitectura",
    texto: "Proyectamos y llevamos adelante la obra, de principio a fin.",
    items: ["Casas", "Remodelaciones", "Locales comerciales"],
  },
  {
    Icono: IconoHoja,
    titulo: "Paisajismo",
    texto: "Diseñamos y armamos espacios verdes para vivirlos todos los días.",
    items: ["Jardines", "Terrazas", "Patios"],
  },
];

const COMPROMISOS = [
  "Materiales sustentables",
  "Diseño que respeta el lugar",
  "La obra y el verde, pensados juntos",
];

export default function QueHacemos() {
  return (
    <>
      {/* ===== SECCIÓN: QUÉ HACEMOS ===== */}
      <section id="que-hacemos" className="py-16 lg:py-24">
        <div className="contenedor">
          <Aparecer>
            <p className="etiqueta">Qué hacemos</p>
            <h2 className="titulo mt-3 max-w-2xl">Arquitectura y paisajismo: la obra y también el jardín</h2>
          </Aparecer>

          {/* Dos bloques al mismo nivel */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICIOS.map(({ Icono, titulo, texto, items }) => (
              <Aparecer as="article" key={titulo} className="rounded-3xl bg-arena p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crema text-salvia-oscuro">
                  <Icono className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-3xl font-medium">{titulo}</h3>
                <p className="mt-2 text-bosque/85">{texto}</p>
                <ul className="mt-6 divide-y divide-bosque/10 border-t border-bosque/10">
                  {items.map((item) => (
                    <li key={item} className="py-3 font-serif text-xl">
                      {item}
                    </li>
                  ))}
                </ul>
              </Aparecer>
            ))}
          </div>

          {/* Banda destacada: conciencia ambiental (lo que más le importa a Paula) */}
          <Aparecer className="mt-5 rounded-3xl bg-bosque p-7 text-crema sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
              <div>
                <p className="etiqueta flex items-center gap-2 text-salvia-claro">
                  <IconoBrote className="h-5 w-5" />
                  Conciencia ambiental
                </p>
                <h3 className="mt-4 font-serif text-3xl font-medium leading-[1.15] sm:text-4xl">
                  Diseñamos pensando en el lugar y en lo que dejamos.
                </h3>
                <p className="mt-4 max-w-xl font-light text-crema/90">
                  Elegimos materiales sustentables y cuidamos el impacto de cada decisión, en la
                  obra y en el jardín. Para nosotros no es un extra: es la forma de trabajar.
                </p>
              </div>
              <ul className="divide-y divide-crema/15 border-y border-crema/15">
                {COMPROMISOS.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-4 font-serif text-xl">
                    <IconoHoja className="h-5 w-5 text-terracota" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Aparecer>
        </div>
      </section>
    </>
  );
}
