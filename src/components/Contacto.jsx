import { CONTACTO, enlace } from "../config.js";
import Aparecer from "./Aparecer.jsx";
import { IconoFlecha, IconoInstagram, IconoMail, IconoUbicacion, IconoWhatsApp } from "./Iconos.jsx";

// Un botón por canal. Sin formulario, sin dirección, sin mapa y sin otros teléfonos:
// la idea es que todas las consultas entren por acá.
const CANALES = [
  {
    canal: "whatsapp",
    Icono: IconoWhatsApp,
    texto: "Escribinos por WhatsApp",
    detalle: "Te responde Paula",
    principal: true,
  },
  {
    canal: "email",
    Icono: IconoMail,
    texto: "Mandanos un mail",
    detalle: CONTACTO.email,
  },
  {
    canal: "instagram",
    Icono: IconoInstagram,
    texto: "Seguinos en Instagram",
    detalle: `@${CONTACTO.instagram}`,
  },
];

export default function Contacto() {
  return (
    <>
      {/* ===== SECCIÓN: CONTACTO ===== */}
      {/* La sección más importante: el "lugar ordenado" para contactarlos. */}
      <section id="contacto" className="sobre-oscuro bg-[#6B483B] py-16 text-crema lg:py-24">
        <div className="contenedor">
          <Aparecer>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="etiqueta text-crema">Contacto</p>
                <h2 className="mt-3 font-serif text-5xl font-medium leading-[1.05] sm:text-6xl">
                  Contanos tu proyecto
                </h2>
                <p className="mt-5 max-w-md text-lg text-crema">
                  Escribinos por el canal que te quede más cómodo. Trabajamos con cita previa:
                  después de tu primer mensaje coordinamos un encuentro.
                </p>
                <p className="mt-6 flex items-center gap-2.5 font-medium">
                  <IconoUbicacion className="h-5 w-5 text-terracota-claro" />
                  {CONTACTO.ubicacion}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {CANALES.map(({ canal, Icono, texto, detalle, principal }) => (
                  <li key={canal}>
                    <a
                      {...enlace(canal)}
                      className={`flex min-h-[76px] items-center gap-4 rounded-3xl px-5 py-4 transition-colors duration-200 ${
                        principal
                          ? "bg-bosque text-crema hover:bg-salvia-oscuro"
                          : "bg-crema text-bosque hover:bg-arena"
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                          principal ? "bg-crema/15" : "bg-terracota-claro"
                        }`}
                      >
                        <Icono className="h-6 w-6" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-medium leading-snug">{texto}</span>
                        <span className={`block truncate text-sm ${principal ? "text-crema/85" : "text-bosque/75"}`}>
                          {detalle}
                        </span>
                      </span>
                      <IconoFlecha className="h-5 w-5 opacity-70" />
                    </a>
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
