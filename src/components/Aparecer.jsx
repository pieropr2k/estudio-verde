import { useEffect, useRef, useState } from "react";

// ===== APARECER =====
// Fade-in discreto cuando el elemento entra en pantalla.
// Con prefers-reduced-motion se muestra directo (ver index.css).
export default function Aparecer({ as: Etiqueta = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <Etiqueta
      ref={ref}
      className={`aparecer ${visible ? "aparecer-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Etiqueta>
  );
}
