import { useState } from 'react';
import '../Styles/formStyle.css';
import Proveedor from './Proveedor';
  function FormProv() {
    const [ProvList, setProvList] = useState ([
      {name:'Tesalia',phone:'0996785821',ruc:'1005698458001',email:'tesalia@gmail.com'},
      {name:'Cerveceria Nacional',phone:'0996785361',ruc:'1005569458001',email:'cerv.nac@gmail.com'},
      {name:'Coca-Cola',phone:'0996782361',ruc:'1005615458001',email:'cocacola@gmail.com'},
      {name:'Distro Arias',phone:'0996785321',ruc:'1005698425001',email:'distroarias@gmail.com'},
    ]);
    const addProv = (newProv) => {
      setProvList([...ProvList, newProv]);
    }
    const [name, setName] = useState("");
    const [ruc, setRuc] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const handlerName = (e) => {
      setName(e.target.value);
    }
    const handlerRuc = (e) => {
      setRuc(e.target.value);
    }

    const handlerPhone = (e) => {
      setPhone(e.target.value);
    }

    const handlerEmail = (e) => {
      setEmail(e.target.value);
    }

    function handlerInsert(){
      if(name===""){
        console.log("Ingrese valor al campo nombre");
      }else{
        if(ruc===""){
          console.log("Ingrese valor al campo RUC");
        }else{
          if(phone===""){
            console.log("Ingrese valor al campo telefono");
          }else{
            if(email===""){
              console.log("Ingrese valor al campo email");
            }else{
              if(email.includes("@")){
                const Prov = [{name:name,ruc:ruc,phone:phone,email:email}];
                addProv(Prov);
                console.log(ProvList);
              }else{
                console.log("Se requiere que ingrese un email al campo email");
              }
            }
          }
        }
      }
    }
    function handlerUpdate(){
      if(name===""){
        console.log("Ingrese un valor al campo nombre");
      }else{
      

        ProvList.map(Element=>{
          if(Element.name = name){
            Element.ruc = ruc;
            Element.phone = phone;
            Element.email = email;
            Limpiar();
          }
        });
        console.log(ProvList);        
      }
    }
    function handlerDelete(){
      if(name===""){
        console.log("Ingrese un valor al campo nombre");
      }else{
        ProvList.forEach(Element=>{
          if(Element.name = name){
            ProvList.pop(Element);
          }
        });   
        Limpiar();
        console.log(ProvList);     
      }
    }
    const Limpiar = () => {
      document.getElementById("nombre").value = "";
      document.getElementById("ruc").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("correo").value = "";
      setName(" ");
      setRuc(" ");
      setPhone(" ");
      setEmail(" ");
    }
    return(
      <div class="container">
        <div class="columnas">
          <div class="campos">
            <form>
              <fieldset>
                <legend class="etiqueta"> NOMBRE </legend>
                <input type="text" class="form-prov" id="nombre" onChange={handlerName}/>
                <br />
                <legend class="etiqueta"> RUC </legend>
                <input type="text" class="form-prov" id="ruc" onChange={handlerRuc}/>
                <br />
                <legend class="etiqueta"> TELÉFONO </legend>
                <input type="text" class="form-prov" id="telefono" onChange={handlerPhone}/>
                <br />
                <legend class="etiqueta"> CORREO</legend>
                <input type="text" class="form-prov" id="correo" onChange={handlerEmail}/>
              </fieldset>
            </form>
            <div class = "blanco">
              <h3>Registros existentes</h3>
              <Proveedor ProvList = {ProvList}/>
            </div>
          </div>
        </div>
        <div class="botones">
          <button type="button" id="insertar" class="boton" onClick={handlerInsert}>Insertar Registro </button>
          <button type="button" id="modificar" class="boton" onClick={handlerUpdate}>Modificar Registro </button>
          <button type="button" id="borrarTodo" class="boton" onClick={handlerDelete}>Eliminar Registro </button>  
        </div>
      </div>
    );  
  }
export default FormProv;