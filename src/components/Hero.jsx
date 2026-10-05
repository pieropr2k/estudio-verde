import { enlace } from "../config.js";
import { FOTO_HERO } from "../data/proyectos.js";
import { IconoImagen, IconoMail, IconoWhatsApp } from "./Iconos.jsx";

export default function Hero() {
  return (
    <>
      {/* ===== SECCIÓN: INICIO (HERO) ===== */}
      {/* La foto del proyecto va de fondo a pantalla completa, oscurecida con un velo
          verde para que el texto se lea. El header queda transparente encima.
          El texto y los dos botones entran sin scrollear en celular. */}
      <section
        id="inicio"
        className="sobre-oscuro relative isolate flex min-h-[100svh] items-center overflow-hidden bg-bosque pb-16 pt-24 text-crema"
      >
        {/* Fondo: la foto, o un degradé suave mientras no haya foto cargada */}
        {FOTO_HERO.src ? (
          <img
            src={FOTO_HERO.src}
            alt={FOTO_HERO.alt}
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={FOTO_HERO.alt}
            className="absolute inset-0 -z-10 bg-gradient-to-br from-salvia to-bosque"
          />
        )}

        {/* Velo: parejo en celular; en escritorio más oscuro del lado del texto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-bosque/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-bosque/90 lg:via-bosque/70 lg:to-bosque/40"
        />

        <div className="contenedor">
          <p className="etiqueta text-salvia-claro">Arquitectura y paisajismo · Rosario</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            Arquitectura y paisajismo con <em className="font-normal text-salvia-claro">conciencia ambiental</em>
          </h1>
          <p className="mt-5 max-w-md text-lg font-light text-crema/90">
            Diseñamos y construimos casas, locales y jardines en Rosario.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a {...enlace("whatsapp")} className="btn bg-crema text-bosque hover:bg-arena">
              <IconoWhatsApp />
              Escribinos por WhatsApp
            </a>
            <a {...enlace("email")} className="btn border border-crema/50 text-crema hover:border-crema hover:bg-crema/10">
              <IconoMail />
              Mandanos un mail
            </a>
          </div>
        </div>

        {/* Aviso del placeholder: desaparece solo al cargar la foto */}
        {!FOTO_HERO.src && (
          <p aria-hidden="true" className="contenedor absolute inset-x-0 bottom-5 flex items-center gap-2 text-sm text-crema/60">
            <IconoImagen className="h-4 w-4" />
            Foto del proyecto de fondo
          </p>
        )}
      </section>
    </>
  );
}
