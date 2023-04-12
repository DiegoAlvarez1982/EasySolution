import './AmpliandoInfo.css'
import { useLocation } from 'react-router-dom'

export function AmpliandoInfo(){

    let location=useLocation()
    let producto=location.state.producto

    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container my-5">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <img src={producto.foto} 
                        class=" img-fluid w-100" 
                        alt='foto' />
                    </div>
                    <div class="col-12 col-md-5 border p-3 rounded shadow" >
                        <h2 class="fw-bold">{producto.nombre}</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Más Vendido</span>
                        <br></br>
                        <br></br>
                        <h3>{producto.precio}</h3>
                        <p>{producto.descripción}</p>
                        <span class="badge text-bg-info mt-3">Oferta hasta agotar existencias</span>
                        <br></br>
                        <p class="text-muted mt-3">Hasta 48 Cuotas </p>
                    
                        <img src='https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/visa.png?alt=media&token=1780bd14-e215-485b-8eac-db3e062177de' 
                        class="img-fluid me-3"
                        alt='foto'/>
                        <img src='https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/american-express.png?alt=media&token=3f4e7734-37db-4e82-a2a8-9c07ac845d2e' 
                        class="img-fluid"
                        alt='foto'
                        />
                        <br></br>
                        <i class="bi bi-truck display-1 my-5"></i>
                        <p>Entregas 24 horas</p>

                        <br></br>
                        <br></br>
                        <form>
                            <label class="form-label">Cantidad: </label>
                            <input class="form-control" type="number" value="1"></input>
                            <button type='submit' class="btn btn-warning mt-2 w-100">
                                <i class="bi bi-cart3"></i> añadir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}