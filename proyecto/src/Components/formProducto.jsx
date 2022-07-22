import { useState } from 'react';
import '../Styles/formStyle.css';
import Producto from './Producto';
  function FormProd() {
    const [ProdList, setProdList] = useState ([{name:'Whisky',precio:'13.00',marca:'Old Times',},{name:'Switch',precio:'3.00',marca:'Switch',}]); //define lista inicial con el producto whisky
    const addProd = (newProd) => { //funcion que agrega a la lista de productos
      setProdList([...ProdList, newProd]);
    }
    //estado para cada atributo del objeto producto
    const [name, setName] = useState("");
    const [precio, setPrecio] = useState("");
    const [marca, setMarca] = useState("");
    
    const handlerName = (e) => {
      setName(e.target.value); //guarda el nombre
    }
    const handlerPrecio = (e) => {
      setPrecio(e.target.value); //guarda el precio
    }

    const handlerMarca = (e) => {
      setMarca(e.target.value); //guarda la marca
    }

    function handlerInsert(){ //funcion para insertar
      if(name===""){
        console.log("Ingrese un valor al campo nombre");
      }else{
        if(precio===""){
          console.log("Ingrese un valor al campo precio");
        }else{
          if(marca===""){
            console.log("Ingrese un valor al campo marca");
          }else{
            const Prod = [{name:name,precio:precio,marca:marca}];
            addProd(Prod);
            console.log(ProdList);
          }
        }
      }
      Limpiar();
    }

    function handlerUpdate(){ //funcion para actualizar
      if(name===""){
        console.log("Ingrese un valor al campo nombre");
      }else{
        ProdList.forEach(Element=>{
          if(Element.name = document.getElementById("nombre").value){
            console.log(document.getElementById("nombre").value +" "+Element.name)
            Element.precio = precio;
            Element.marca = marca;
          }
        });
        Limpiar();
        console.log(ProdList);        
      }
    }

    function handlerDelete(){ //funcion para eliminar
      if(name===""){
        console.log("Ingrese un valor al campo nombre");
      }else{
        ProdList.forEach(Element=>{
          if(Element.name = name){
            ProdList.pop(Element);
          }
        });   
        Limpiar();
        console.log(ProdList);     
      }
    }
    const Limpiar = () => { //limpia los textbox 
      document.getElementById("nombre").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("marca").value = "";
      setName("");
      setPrecio("");
      setMarca("");
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
                <legend class="etiqueta"> PRECIO </legend>
                <input type="text" class="form-prov" id="precio" onChange={handlerPrecio}/>
                <br />
                <legend class="etiqueta"> MARCA </legend>
                <input type="text" class="form-prov" id="marca" onChange={handlerMarca}/>
                <br />
              </fieldset>
            </form>
            <div class = "blanco">
              <h3>Registros existentes</h3>
              <Producto ProdList = {ProdList}/>
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
export default FormProd;