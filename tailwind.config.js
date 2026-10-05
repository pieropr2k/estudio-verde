/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ===== PALETA =====
      // Natural y cálida: nada saturado ni flúor.
      // Contraste (WCAG) medido sobre crema #F5F0E6:
      //   bosque          10.3:1  -> textos y botones principales
      //   salvia-oscuro    5.9:1  -> etiquetas y textos chicos de color
      //   salvia           3.8:1  -> NO usar para texto chico (solo íconos, bordes, fondos)
      //   madera           3.3:1  -> solo decorativo
      // Blanco sobre salvia da 4.4:1 (no llega a AA): por eso los botones van en bosque.
      colors: {
        crema: "#F5F0E6", // fondo general
        arena: "#EAE2D2", // superficies (tarjetas, placeholders)
        bosque: "#2F3B2A", // verde oscuro: textos y botones
        salvia: {
          DEFAULT: "#6B7F5E", // verde principal de la marca
          oscuro: "#4F6145", // variante para texto chico
          claro: "#DDE3D3", // fondos suaves
        },
        madera: "#A67B5B",
        terracota: {
          DEFAULT: "#C08A6B",
          claro: "#EBD5C5",
          // Marrón tierra para Contacto: rgb(107 72 59).
          // Crema sobre este color da 7:1 (AAA).
          intenso: "#6B483B",
        },
      },
      // ===== TIPOGRAFÍA =====
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", '"Times New Roman"', "serif"],
        sans: ["Figtree", "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
