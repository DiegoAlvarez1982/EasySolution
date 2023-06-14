import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'
import Contacto  from '../Contacto/Contacto'
import Registro from '../Registro/Registro'


export function Home(){
    return(
        <>
            <section>
                <div class="banner">
                    <h1>ESTAMOS PARA AYUDARTE!</h1>
                    <h2>Aquí encontraras la mejor opción...</h2>
                </div>
            </section>    
            <AcercaDe></AcercaDe>  
            <Servicios></Servicios> 
            
           
            
                    
        
        </>
    )
}