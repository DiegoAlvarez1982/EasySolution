import './Menu.css'
import { Link } from "react-router-dom"
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                <div class="col-4" > 
                    <img src='https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/Imagen2.png?alt=media&token=e324d9e8-cadb-48eb-82f0-a5d0c9d62459'></img>
                </div>    
                </Link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/administrar">Agregar Productos</Link>
                    </li>  
                    <li class="nav-item">
                    <Link class="nav-link" to="/productos">Productos</Link>
                    </li>   
                    <li class="nav-item">
                    <Link class="nav-link" to="/Desarrolladores">Acerca De</Link>
                    </li>               
                </ul>
                </div>
            </div>
        </nav>
        </>
    )

}