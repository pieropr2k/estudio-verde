import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import QueHacemos from "./components/QueHacemos.jsx";
import Proyectos from "./components/Proyectos.jsx";
import ComoTrabajamos from "./components/ComoTrabajamos.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import BotonWhatsApp from "./components/BotonWhatsApp.jsx";

// Web de una sola página. Cada sección es un componente en src/components/.
// Los datos de contacto se cambian en src/config.js y las fotos en src/data/proyectos.js.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QueHacemos />
        <ComoTrabajamos />
        <Nosotros />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
