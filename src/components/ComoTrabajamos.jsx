import Aparecer from "./Aparecer.jsx";

// TODO: validar con Paula los 4 pasos y sus textos (son una propuesta).
// Sin plazos ni costos por etapa: "cada proyecto es un mundo".
const PASOS = [
  { titulo: "Charla", texto: "Nos contás qué tenés en mente y conocemos el lugar." },
  { titulo: "Diseño", texto: "Te mostramos una propuesta y la ajustamos juntos." },
  { titulo: "Obra", texto: "Llevamos adelante el trabajo y te mantenemos al tanto." },
  { titulo: "Entrega", texto: "Recorremos todo con vos y te lo dejamos listo para disfrutar." },
];

export default function ComoTrabajamos() {
  return (
    <>
      {/* ===== SECCIÓN: CÓMO TRABAJAMOS ===== */}
      <section id="como-trabajamos" className="sobre-oscuro bg-bosque py-16 text-crema lg:py-24">
        <div className="contenedor">
          <Aparecer>
            <p className="etiqueta text-salvia-claro">Cómo trabajamos</p>
            <h2 className="titulo mt-3 text-crema">Cuatro pasos, sin vueltas</h2>
          </Aparecer>

          {/* Celular: pasos apilados con línea vertical. Escritorio: en fila con línea horizontal. */}
          <ol className="mt-10 grid lg:grid-cols-4 lg:gap-8">
            {PASOS.map((paso, i) => (
              <Aparecer as="li" key={paso.titulo} className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:pb-0">
                {/* Línea conectora (no va en el último paso) */}
                {i < PASOS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-6 top-12 w-px bg-crema/30 lg:bottom-auto lg:left-12 lg:right-[-2rem] lg:top-6 lg:h-px lg:w-auto"
                  />
                )}
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crema/40 bg-crema font-serif text-xl text-bosque">
                  {i + 1}
                </span>
                <div className="lg:mt-6 lg:pr-4">
                  <h3 className="font-serif text-3xl font-medium">{paso.titulo}</h3>
                  <p className="mt-2 text-crema/85">{paso.texto}</p>
                </div>
              </Aparecer>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
