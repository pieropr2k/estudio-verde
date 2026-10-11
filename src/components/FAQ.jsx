import { useState } from "react";
import { CONTACTO, enlace } from "../config.js";
import { faqGroups, faqIntro } from "../data/faq.js";
import Aparecer from "./Aparecer.jsx";
import { IconoMas, IconoWhatsApp } from "./Iconos.jsx";

// Un solo ítem abierto a la vez. Cada ítem es un botón con aria-expanded/aria-controls.
export default function FAQ() {
  const [abierto, setAbierto] = useState(null);

  return (
    <>
      {/* ===== SECCIÓN: PREGUNTAS FRECUENTES ===== */}
      {/* Fondo arena: alterna con Contacto (marrón) que está justo arriba. */}
      <section id="preguntas" className="scroll-mt-20 bg-arena py-16 lg:py-24">
        <div className="contenedor">
          <div className="mx-auto max-w-3xl">
            <Aparecer>
              <p className="etiqueta">{faqIntro.eyebrow}</p>
              <h2 className="titulo mt-3">{faqIntro.title}</h2>
              <p className="mt-4 text-lg text-bosque/85">{faqIntro.subtitle}</p>
            </Aparecer>

            {faqGroups.map((grupo, g) => (
              <Aparecer key={grupo.title} className="mt-12">
                <h3 className="border-b border-bosque/20 pb-3 etiqueta text-terracota-intenso">
                  {grupo.title}
                </h3>
                <ul className="divide-y divide-bosque/10">
                  {grupo.items.map((item, i) => {
                    const id = `faq-${g}-${i}`;
                    const esAbierto = abierto === id;
                    return (
                      <li key={id}>
                        <h4>
                          <button
                            type="button"
                            id={`${id}-boton`}
                            aria-expanded={esAbierto}
                            aria-controls={`${id}-panel`}
                            onClick={() => setAbierto(esAbierto ? null : id)}
                            className="flex min-h-[56px] w-full items-center justify-between gap-4 py-3 text-left text-base font-medium text-bosque focus-visible:ring-4 focus-visible:ring-salvia/40"
                          >
                            {item.q}
                            <IconoMas
                              className={`h-5 w-5 text-terracota-intenso transition-transform duration-300 motion-reduce:transition-none ${
                                esAbierto ? "rotate-45" : ""
                              }`}
                            />
                          </button>
                        </h4>
                        <div
                          id={`${id}-panel`}
                          role="region"
                          aria-labelledby={`${id}-boton`}
                          className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                            esAbierto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pb-5 text-base text-bosque/85">{item.a}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Aparecer>
            ))}

            {/* Cierre: lleva al WhatsApp del estudio (mismo enlace e ícono que el resto de la web) */}
            <Aparecer className="mt-14 rounded-3xl bg-crema p-8 text-center">
              <p className="font-serif text-3xl font-medium text-bosque">¿Te quedó alguna duda?</p>
              <p className="mt-2 text-bosque/85">Escribinos y te respondemos.</p>
              <a {...enlace("whatsapp")} className="btn-principal mt-6">
                <IconoWhatsApp />
                Escribinos por WhatsApp
              </a>
              <p className="mt-3 text-sm text-bosque/75">{CONTACTO.whatsappTexto}</p>
            </Aparecer>
          </div>
        </div>
      </section>
    </>
  );
}
