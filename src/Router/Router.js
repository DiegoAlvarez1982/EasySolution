import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Menu } from "../Menu/Menu";
import { Tienda } from "../Tienda/Tienda";
import { Footer } from "../Footer/Footer";
import { Desarrolladores } from "../Desarrolladores/Desarrolladores";
import Contacto from "../Contacto/Contacto";
import Registro  from "../Registro/Registro"

export function Router() {
  return (
    <>
      <header>
        <Menu></Menu>
      </header>

      <Routes>
        <Route path="/productos" element={<Tienda />} />
        <Route path="/" element={<Home />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
