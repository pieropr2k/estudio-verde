// ===== DATOS DE CONTACTO =====
// Único lugar donde se cambian. Toda la web lee de acá.
export const CONTACTO = {
  email: "estudioverde@gmail.com",
  whatsapp: "51998227988", // formato internacional sin + ni espacios (es el que usa wa.me)
  whatsappTexto: "+51 998 227 988", // cómo se muestra en la página
  // TODO: confirmar con Paula este número: el código 51 es de Perú, y para Rosario sería 549341...
  instagram: "TODO_usuario", // TODO: usuario de Instagram sin @
  ubicacion: "Rosario, con cita previa",
};

// TODO: confirmar con Paula que el nombre es "Estudio Verde" y no "Verde Estudio"
export const NOMBRE_ESTUDIO = "Estudio Verde";

const MENSAJE_WHATSAPP = "Hola! Quería consultarles por un proyecto.";

// Un dato sigue pendiente si todavía tiene el TODO o las X del número de ejemplo
const pendiente = (valor) => !valor || /TODO|X{3,}/i.test(valor);

const LINKS = {
  whatsapp: pendiente(CONTACTO.whatsapp)
    ? null
    : `https://wa.me/${CONTACTO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`,
  email: pendiente(CONTACTO.email) ? null : `mailto:${CONTACTO.email}`,
  instagram: pendiente(CONTACTO.instagram)
    ? null
    : `https://instagram.com/${CONTACTO.instagram.replace(/^@/, "")}`,
};

if (import.meta.env.DEV) {
  Object.entries(LINKS).forEach(([canal, href]) => {
    if (!href) console.warn(`[Estudio Verde] Falta cargar "${canal}" en src/config.js`);
  });
}

// Props para un <a> de cada canal: <a {...enlace("whatsapp")}>
// DECISIÓN: mientras un dato esté en TODO, el botón lleva a la sección Contacto
// en vez de abrir un link roto. Al cargar el dato real pasa a funcionar solo.
export function enlace(canal) {
  const href = LINKS[canal];
  if (!href) return { href: "#contacto" };
  return href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
}
