import { enlace } from "../config.js";
import { PROYECTOS } from "../data/proyectos.js";
import Aparecer from "./Aparecer.jsx";
import Foto from "./Foto.jsx";
import { IconoFlecha, IconoInstagram } from "./Iconos.jsx";

export default function Proyectos() {
  return (
    <>
      {/* ===== SECCIÓN: PROYECTOS ===== */}
      {/* Las fotos son protagonistas. Los proyectos se cargan en src/data/proyectos.js */}
      <section id="proyectos" className="bg-arena py-16 lg:py-24">
        <div className="contenedor">
          <Aparecer>
            <p className="etiqueta">Proyectos</p>
            <h2 className="titulo mt-3">Algunos de nuestros trabajos</h2>
          </Aparecer>

          <ul className="mt-10 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {PROYECTOS.map((proyecto) => (
              <Aparecer as="li" key={proyecto.nombre}>
                <figure>
                  <Foto
                    src={proyecto.src}
                    alt={proyecto.alt}
                    proporcion="aspect-[4/5]"
                    tono={proyecto.tono}
                  />
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-serif text-2xl font-medium">{proyecto.nombre}</span>
                    <span className="etiqueta shrink-0">{proyecto.tipo}</span>
                  </figcaption>
                </figure>
              </Aparecer>
            ))}
          </ul>

          <Aparecer className="mt-12 flex justify-center">
            <a {...enlace("instagram")} className="btn-secundario">
              <IconoInstagram />
              Mirá más en Instagram
              <IconoFlecha className="h-4 w-4" />
            </a>
          </Aparecer>
        </div>
      </section>
    </>
  );
}
