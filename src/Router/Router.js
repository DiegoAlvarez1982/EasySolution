import { Route, Routes} from "react-router-dom"
import { Home } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import {Menu} from '../Menu/Menu'
import { Tienda } from "../Tienda/Tienda"
import { Footer } from "../Footer/Footer"


export function Router(){
    return(
        <>
        <header>
            <Menu></Menu>
        </header>
        <Routes>
            <Route path="/productos" element={<Tienda/>} />
            <Route path="/administrar" element={<Administrador/>} />
            <Route path="/" element={<Home />} />

        </Routes>

        </>
    )

}