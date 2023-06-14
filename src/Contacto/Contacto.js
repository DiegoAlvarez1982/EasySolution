import './Contacto.css'
function Contacto() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     <form action="https://formsubmit.co/dalvarez1982@hotmail.com" method="POST"> 
      <div class="container">
        <div class ="contact-box">
          <div class="left"></div>
            <div class ="right">
              <h2>CUENTANOS TU INQUIETUD</h2>
              <input type ="text" name="name" class="field" placeholder="Nombre completo"></input>
              <input type ="email" name="email" class ="field" placeholder ="Correo electrónico"></input>
              <input type ="text" name="phone" class ="field" placeholder ="Teléfono"></input>
              <textarea class ="field area" name="mesagge" placeholder ="Mensaje"></textarea>
              <button class="btn">Enviar</button>

              <input type ="hidden" name="_next" value="http://localhost:3000/contacto"></input>
              <input type ="hidden" name="_captcha" value ="false"></input>
            </div>             
        </div>
      </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </>
  );
}

export default Contacto;
