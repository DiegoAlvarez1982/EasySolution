import './Registro.css' 

export function Registro() {
    return(
        <>
       <br></br>
       <br></br>
       <br></br>
      <br></br>
        <div className='main-box'>
        <div className='row'>
            <div className='col-md-12 text-center aligh-center'><h1>Registro</h1>
         </div>
            <div className='row'>
               <div className='col-md-6'>Nombres Completo</div>
               <div className='col-md-6'>
                  <input type ="text" name ="Nombre_Completo" className='form-control'placeholder='Nombres'/>
               </div>
            </div>

            <div className='row'>
               <div className='col-md-6'>Identificacion</div>
               <div className='col-md-6'>
                  <input type ="text" name ="identificacion" className='form-control' placeholder='Id'/>
               </div>
            </div>

            <div className='row'>
               <div className='col-md-6'>Direccion</div>
               <div className='col-md-6'>
                  <input type ="text" name ="Direccion" className='form-control' placeholder='Direccion'/>
               </div>
            </div>

            <div className='row'>
               <div className='col-md-6'>Telefono</div>
               <div className='col-md-6'>
                  <input type ="text" name ="Telefono" className='form-control' placeholder='Telefono'/>
               </div>
            </div>

            <div className='row'>
               <div className='col-md-6'>Email</div>
               <div className='col-md-6'>
                  <input type ="email" name ="Email" className='form-control' placeholder='Email'/>
               </div>
            </div>

            <div className='row'>
               <div className='col-md-6'>Contraseña</div>
               <div className='col-md-6'>
                  <input type ="contraseña" name ="Contraseña" className='form-control'placeholder='Contraseña'/>
               </div>
            </div>

               <div className='row'>
                  <div className="cold-md-3 text-center">
                  <input type ="Enviar" name="Enviar" value ="Registro" className='btn btn-success'/>
                  </div>
                </div>
          </div>
          </div>
          <br></br>
       <br></br>
       <br></br>
      <br></br>
        </>

     );
}

export default Registro;




