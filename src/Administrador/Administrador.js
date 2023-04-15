import { useState, useEffect } from "react"
import { registrarProductoEnBd } from "../services/agregarProducto"

export function Administrador() {

    const[nombre,setNombre]=useState("")
    const[foto,setFoto]=useState("")
    const[cantidad,setCantidad]=useState("")
    const[descripcion,setDescripcion]=useState("")
    const[precio,setPrecio]=useState("")
    const[clasificacion,setClasificacion]=useState("")
    const[marca,setMarca]=useState("")
    const[presentacion,setPresentacion]=useState("")
    const[peso,setPeso]=useState("")
    const[proveedor,setProveedor]=useState("")
    const[volumen,setVolumen]=useState("")
    const[iva,setIva]=useState("")
    const[descuento,setDescuento]=useState("")
    const[fechaingreso,setFechaingreso]=useState("")
    const[fechavencimiento,setFechavencimiento]=useState("")

    function procesarFormulario(evento){
        evento.preventDefault()
        let datosProducto={
            "nombre":nombre,
            "cantidad":cantidad,
            "foto":foto,
            "descripcion":descripcion,
            "precio unitario":precio,
            /*"clasificacion":clasificacion,
            "marca":marca,
            "presentacion":presentacion,
            "peso":peso,
            "proveedor":proveedor,
            "volumen":volumen,
            "iva":iva,
            "descuento":descuento,
            "fechaingreso":fechaingreso,
            "fechavencimiento":fechavencimiento*/
        }
        console.log(datosProducto);
        registrarProductoEnBd(datosProducto)
        .then(function(respuesta){
            console.log(respuesta)
        })
    }


    

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div class="container-fluid my-4">
                <div class="row">
                    <div class="col-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/banner2.png?alt=media&token=851d3506-ce46-40f4-9fc7-12884d1f0175" alt="foto" class="img-fluid" />
                    </div>
                    <div class="col-4">
                        <br></br>
                        <br></br>
                        <h2>Registro de mercancia</h2>
                        <form class="my-5" onSubmit={procesarFormulario}>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-cart3"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Nombre"
                                        id="nombre" 
                                        onChange={(evento)=>{
                                            setNombre(evento.target.value)
                                        }}
                                        
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-images"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Foto"
                                        id="foto" 
                                        onChange={(evento)=>{
                                            setFoto(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="bi bi-boxes"></i></span>
                                        <input 
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Cantidad"
                                        id="cantidad" 
                                        onChange={(evento)=>{
                                            setCantidad(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-card-text"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Descripcion" 
                                        id="descripcion"
                                        onChange={(evento)=>{
                                            setDescripcion(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="bi bi-currency-exchange"></i></span>
                                        <input 
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Precio" 
                                        id="precio" 
                                        onChange={(evento)=>{
                                            setPrecio(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-blockquote-right"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Clasificacion" 
                                        id="clasificacion"
                                        onChange={(evento)=>{
                                            setClasificacion(evento.target.value)
                                        }}
                                         />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="bi bi-github"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Marca" 
                                        id="marca"
                                        onChange={(evento)=>{
                                            setMarca(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"><i class="bi bi-app"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Presentacion" 
                                        id="presentacion" 
                                        onChange={(evento)=>{
                                            setPresentacion(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" >ml</span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Peso" 
                                        id="peso"
                                        onChange={(evento)=>{
                                            setPeso(evento.target.value)
                                        }}
                                         />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-truck"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Proveedor" 
                                        id="proveedor"
                                        onChange={(evento)=>{
                                            setProveedor(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-activity"></i></span>
                                        <input 
                                        type="Number" 
                                        class="form-control" 
                                        placeholder="Volumen" 
                                        id="volumen"
                                        onChange={(evento)=>{
                                            setVolumen(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-coin"></i></span>
                                        <input 
                                        type="number" 
                                        class="form-control" 
                                        placeholder="IVA" 
                                        id="iva"
                                        onChange={(evento)=>{
                                            setIva(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-percent"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Descuento" 
                                        id="descuento"
                                        onChange={(evento)=>{
                                            setDescuento(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-calendar-date"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Fecha ingreso" 
                                        id="fechaingreso"
                                        onChange={(evento)=>{
                                            setFechaingreso(evento.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" ><i class="bi bi-calendar-date-fill"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Fecha venciento" 
                                        id="fechavencimiento"
                                        onChange={(evento)=>{
                                            setFechavencimiento(evento.target.value)
                                        }}
                                         />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-outline-success w-100 btn-center ">Enviar</button>
                                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}