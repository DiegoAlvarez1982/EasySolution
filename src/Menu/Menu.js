import './Menu.css'
import { Link } from "react-router-dom"
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light menu fixed-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                <div class="col-3 " > 
                    <img src='https://firebasestorage.googleapis.com/v0/b/easysolution-4e923.appspot.com/o/logo3.png?alt=media&token=5d35db6a-92a4-4751-8f3f-ee531c907cef' alt="foto" class=" col-8  ms-3  w-100 img-fluid "></img>
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
                    <Link class="nav-link" to="/productos">Servicios</Link>
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