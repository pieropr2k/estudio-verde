import { useEffect, useState } from "react";
import { enlace } from "../config.js";
import Logo from "./Logo.jsx";
import { IconoCerrar, IconoMenu, IconoWhatsApp } from "./Iconos.jsx";

const MENU = [
  { href: "#inicio", texto: "Inicio" },
  { href: "#que-hacemos", texto: "Qué hacemos" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#como-trabajamos", texto: "Cómo trabajamos" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  // Cerrar el menú del celular con Escape
  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [abierto]);

  // Arriba de todo el header es transparente (se ve la foto del hero).
  // Al scrollear o abrir el menú pasa a fondo crema.
  const [scrolleado, setScrolleado] = useState(false);
  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 24);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);
  const solido = scrolleado || abierto;

  return (
    <>
      {/* ===== SECCIÓN: HEADER ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
          solido
            ? "border-bosque/10 bg-crema/95 text-bosque backdrop-blur"
            : "sobre-oscuro border-transparent bg-transparent text-crema"
        }`}
      >
        <div className="contenedor flex h-[77px] items-center justify-between gap-3">
          <Logo className="text-2xl font-semibold sm:text-[1.75rem]" />

          {/* Menú de escritorio */}
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-[15px] font-semibold opacity-90 transition-opacity hover:opacity-100 xl:text-[17px]"
                  >
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            {/* DECISIÓN: "Escribinos" abre WhatsApp directo en vez de bajar a Contacto.
                Es el camino más corto para el criterio de los 5 segundos: un toque y
                ya está escribiendo por el canal correcto. La sección Contacto sigue
                en el menú para quien prefiera mail. Queda fuera del menú hamburguesa
                para que se vea siempre, también en celular. */}
            <a
              {...enlace("whatsapp")}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-[15px] font-semibold transition-colors duration-300 sm:px-5 sm:text-base ${
                solido ? "bg-bosque text-crema hover:bg-salvia-oscuro" : "bg-crema text-bosque hover:bg-arena"
              }`}
            >
              <IconoWhatsApp className="h-[18px] w-[18px]" />
              Escribinos
            </a>

            {/* Botón hamburguesa (solo celular y tablet) */}
            <button
              type="button"
              aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={abierto}
              aria-controls="menu-celular"
              onClick={() => setAbierto(!abierto)}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-salvia/20 lg:hidden"
            >
              {abierto ? <IconoCerrar className="h-6 w-6" /> : <IconoMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú del celular */}
        <nav
          id="menu-celular"
          aria-label="Principal"
          hidden={!abierto}
          className="border-t border-bosque/10 bg-crema lg:hidden"
        >
          <ul className="contenedor py-3">
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className="flex min-h-[52px] items-center font-serif text-2xl font-semibold"
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
