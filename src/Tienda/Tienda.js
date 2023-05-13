import './Tienda.css'
import { useNavigate } from 'react-router-dom'

export function Tienda(){

    function cambiarFoto(evento){
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento){
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }
    
    let navegador=useNavigate()
    function pasarInformacion(producto){
        navegador('/comprar',{
            state:{producto}
        }
            
            
        )        
    }

    let productos = [
        {
            nombre:"Servicios de Instalación",
            descripción:"Plomeria y Electricidad en general",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/instal1.jpg?alt=media&token=27a92680-ef2f-4a8e-8d4b-2b7e32db2472"
        },
        {
            nombre: "Servicios de Instalación",
            descripción:"Instalacion de muebles",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/instal2.jpg?alt=media&token=87d954c3-1910-4f11-8ce8-8a3c545244b6"
        },
        {
            nombre: "Servicios de Instalación",
            descripción:"Reparacion y mantenimientos de aparatos electricos",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/instal3.jpg?alt=media&token=93b0abd6-1701-4101-9eb5-2f6d2f315e4a"
        },
        {
            nombre: "Encuentra la ferreteria más cercana ",
            
            descripción:"Utiliza nuestra App",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/FERR1.jpg?alt=media&token=d058ba44-43a2-4cbb-bed1-a72dc09e3502"
        },
        {
            nombre: "Encuentra la pieza que necesitas",
            
            descripción:"Encuentra las mejores tiendas.",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/1.jpg?alt=media&token=63cde252-7e5d-4e02-9dd4-86e663dc6fe7"
        },
        {
            nombre: "Encuentra una facil solucion",
            
            descripción:"Cuida tus espacios.",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/FERR2.jpg?alt=media&token=2bb5c11e-2ddf-4c21-ac5c-5e23f7da2751"
        },
        {
            nombre: "Hazlo tu mismo",
            
            descripción:"Mira y Aprende como hacerlo ",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/3.jpg?alt=media&token=60be133e-d6ed-43b1-833b-1147cf84fd9b"
        },
        {
            nombre: "Hazlo tu mismo",
            
            descripción:"Mira nuestros recursos",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/HAZLO2.jpg?alt=media&token=f832d14d-a374-416b-93b9-c9c3c996409a"
        },
        {
            nombre: "Hazlo tu mismo",
            
            descripción:" Manos a la obra. ",
            foto:"https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/AHZLO1.jpg?alt=media&token=5f0e798d-1957-4337-8e21-7e7a0cb503a7"
        }
    ]

    return(
        <>     
            <br></br>
            <br></br>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-5 ">
                {
                    productos.map(function(producto){
                        return(
                            <div class="col zoom" onClick={function(){pasarInformacion(producto)}} >
                                <div class="card shadow h-100 p-2">
                                    <img src={producto.foto} 
                                        alt="foto" 
                                        class="img-fluid sombra " 
                                        onMouseOver={cambiarFoto}
                                        onMouseLeave={cambiarFoto2}
                                    />
                                    <h2 class="fw-bold text-center ">{producto.nombre}</h2>
                                    <p class="text-center fw-bold">{producto.descripción}</p>
                                    
                                    
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>                     
        
        </>
    )

}