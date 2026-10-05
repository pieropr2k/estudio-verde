// ===== PROYECTOS =====
// Para sumar una foto real: guardarla en /public/imgs/proyectos/ y completar `src`
// (ej: src: "/imgs/proyectos/casa-funes.jpg"). Si `src` queda vacío se muestra un placeholder.
// TODO: pedir a Paula la carpeta de fotos con el nombre y el tipo de cada proyecto.
// Los nombres de abajo son provisorios, no son proyectos reales.
export const PROYECTOS = [
  { src: "/imgs/proyectos/1-casa.jpg", alt: "Casa contemporánea de ladrillo y madera con jardín", nombre: "Proyecto 01", tipo: "Casa", tono: "bg-salvia-claro" },
  { src: "/imgs/proyectos/2-jardin.jpg", alt: "Terraza con deck de madera, canteros con aromáticas y pérgola con enredaderas", nombre: "Proyecto 02", tipo: "Terraza", tono: "bg-crema" },
  { src: "/imgs/proyectos/3-localcomercial.jpg", alt: "Patio interior con un árbol, macetas de terracota y una pileta de piedra", nombre: "Proyecto 03", tipo: "Patio", tono: "bg-terracota-claro" },
  { src: "/imgs/proyectos/4-terraza.jpg", alt: "Living con pared de ladrillo, vigas de madera y gran ventanal al jardín", nombre: "Proyecto 04", tipo: "Remodelación", tono: "bg-crema" },
  { src: "/imgs/proyectos/5-remodelacion.jpg", alt: "Interior de una casa con macetas y ventanal que da a un jardín de plantas nativas", nombre: "Proyecto 05", tipo: "Casa", tono: "bg-terracota-claro" },
  { src: "/imgs/proyectos/6-patio.jpg", alt: "Patio con un árbol grande, macetas de terracota y piso de piedra", nombre: "Proyecto 06", tipo: "Patio", tono: "bg-salvia-claro" },
];

// Foto principal del inicio
// TODO: elegir con Paula la foto que mejor represente al estudio
export const FOTO_HERO = {
  src: "/imgs/img_header.jpg",
  alt: "Foto principal de un proyecto de Estudio Verde",
};

// Fotos del equipo
// Fotos en /public/imgs/nosotros/
export const FOTOS_EQUIPO = {
  paula: { src: "/imgs/nosotros/paula.jpg", alt: "Retrato de Paula, arquitecta de Estudio Verde" },
  martin: { src: "/imgs/nosotros/martin.jpg", alt: "Retrato de Martín, paisajista de Estudio Verde" },
};
