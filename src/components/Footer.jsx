import { CONTACTO, NOMBRE_ESTUDIO, enlace } from "../config.js";
import Logo from "./Logo.jsx";
import { IconoInstagram, IconoMail, IconoUbicacion, IconoWhatsApp } from "./Iconos.jsx";

export default function Footer() {
  const anio = new Date().getFullYear();
  const claseLink = "inline-flex min-h-[44px] items-center gap-3 text-crema/90 transition-colors hover:text-crema";

  return (
    <>
      {/* ===== SECCIÓN: FOOTER ===== */}
      {/* Repite los datos de contacto. El padding de abajo deja lugar al botón
          flotante de WhatsApp para que no tape nada. */}
      <footer className="sobre-oscuro bg-bosque pb-24 pt-14 text-crema">
        <div className="contenedor grid gap-10 md:grid-cols-2">
          <div>
            <Logo className="text-3xl" />
            <p className="mt-2 max-w-xs font-light text-crema/85">
              Arquitectura y paisajismo con conciencia ambiental.
            </p>
          </div>

          <ul className="flex flex-col md:items-end">
            <li>
              <a {...enlace("whatsapp")} className={claseLink}>
                <IconoWhatsApp />
                Escribinos por WhatsApp
              </a>
            </li>
            <li>
              <a {...enlace("email")} className={claseLink}>
                <IconoMail />
                {CONTACTO.email}
              </a>
            </li>
            <li>
              <a {...enlace("instagram")} className={claseLink}>
                <IconoInstagram />@{CONTACTO.instagram}
              </a>
            </li>
            <li className="inline-flex min-h-[44px] items-center gap-3 text-crema/90">
              <IconoUbicacion />
              {CONTACTO.ubicacion}
            </li>
          </ul>
        </div>

        <div className="contenedor mt-10">
          <p className="border-t border-crema/15 pt-6 text-sm text-crema/75">
            © {anio} {NOMBRE_ESTUDIO}
          </p>
        </div>
      </footer>
    </>
  );
}
