import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'


export function Home(){
    return(
        <>
            <section>
                <div class="banner">
                    <h2>TRAGOS DE AUTOR!</h2>
                    <h3>Licores Importados...</h3>
                </div>
            </section>    
            <AcercaDe></AcercaDe>  
            <Servicios></Servicios>
           
        
        </>
    )
}