import './Tienda.css'
export function Tienda(){

    function cambiarFoto(evento){
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento){
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }

    let productos = [
        {
            nombre:"Vino",
            precio:10000,
            descripción:"Vino del mejor viñero",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/vinos.png?alt=media&token=eeffa2b9-66bf-4042-8a11-38772ccf7cce"
        },
        {
            nombre: "Whisky",
            precio:20000,
            descripción:"Whisky el mejor regalo",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/whisky.png?alt=media&token=1794e238-09e1-4c64-abe0-7a6e2e40ed57"
        },
        {
            nombre: "Vodka",
            precio:30000,
            descripción:"Vodka el original",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/vodka.png?alt=media&token=d371913c-6d40-4889-a0b2-bfeae6e0f642"
        },
        {
            nombre: "Cerveza",
            precio:5000,
            descripción:"Cerveza el parche de los friends",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/cervezA.png?alt=media&token=c9da61e7-bca8-4be4-bb53-ae30259c0033"
        },
        {
            nombre: "Tequila",
            precio:95000,
            descripción:"Tequila una tarde divertida",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/tequila.png?alt=media&token=9d1ff4fa-edbe-4bc0-9340-aef2111d4332"
        },
        {
            nombre: "Ron",
            precio:78000,
            descripción:"Ron lo mejor para la diversión",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/ron.png?alt=media&token=f1fd1635-253d-44d0-9489-08caa6147a8e"
        },
        {
            nombre: "Jagermeister",
            precio:81000,
            descripción:" Jagermeister, un licor de hierbas producido en la ciudad alemana de Wolfenbütte",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/jag.png?alt=media&token=3ebb73dc-7073-4b21-b701-f9f9b2d1566b"
        },
        {
            nombre: "Brandy",
            precio:35000,
            descripción:"El mejor Brandy lo hacen en Filipinas y a todos les gusta mucho.",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/brandy.png?alt=media&token=e2f6d3b0-12dd-4c4c-ad29-71f6514b9b81"
        },
        {
            nombre: "Soju",
            precio:56000,
            descripción:"Soju, una bebida clara que es fabricada en Corea y muy popular por allá.",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/soju.png?alt=media&token=aa3a8f56-0433-4ffb-93f9-746e82e8476c"
        },
        {
            nombre: "Sake",
            precio:64000,
            descripción:"El sake, bebida alcohólica japonesa, obtenida por fermentación del arroz",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/sake2.png?alt=media&token=4e51db7b-47d1-444e-b2f8-96f4fc287eae"
        },
        {
            nombre: "Crema de Whisky",
            precio:110000,
            descripción:" La crema de Whisky irlandesa puede beberse sola con hielo o como parte de un cóctel.",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/crema%20de%20w.png?alt=media&token=f466ab4f-7f74-4fe0-9f4d-6016e85ef0e9"
        },
        {
            nombre: "Champagne",
            precio:55000,
            descripción:"El champagne por la habitual es la combinación de distintos tipos de uva.",
            foto:"https://firebasestorage.googleapis.com/v0/b/storeskilimanjaro0.appspot.com/o/champ.png?alt=media&token=d7775bf9-6b19-4c7b-bb40-b884d306f96d"
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
                            <div class="col zoom" >
                                <div class="card shadow h-100 p-2">
                                    <img src={producto.foto} alt="foto" class="img-fluid sombra " 
                                        onMouseOver={cambiarFoto}
                                        onMouseLeave={cambiarFoto2}
                                    />
                                    <h2 class="fw-bold text-center ">{producto.nombre}</h2>
                                    <p class="text-center fw-bold">{producto.descripción}</p>
                                    <h3 class="text-warning text-center" >$ {producto.precio} COP</h3>
                                    
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>                     
        
        </>
    )

}