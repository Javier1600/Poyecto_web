import React from "react";
import '../Styles/productos.css';
import { useState } from 'react';
import FormProv from './FormProv.jsx';
import Ventas from './Ventas.jsx';
import FormProd from './formProducto.jsx';

const Principal = (props) => {
  const {state, setState} = props; // paso de propiedades del app.js
  const [cambioproducto, setcambioproducto]=useState(false);  //mensjae de error
  const [cambioprove, setcambioprove]=useState(false);
  const [cambioventa, setcambioventa]=useState(false);
   //maneja estados para redireccionar
  const handlerproducto= (e)=>{
    setcambioproducto(true);
    setcambioprove(false);
    setcambioventa(false);
    
  }
   //maneja estados para redireccionar
  const handlerprove= (e)=>{
    setcambioproducto(false);
    setcambioprove(true);
    setcambioventa(false);
    
  }
   //maneja estados para redireccionar
  const handlerventa= (e)=>{
    setcambioproducto(false);
    setcambioprove(false);
    setcambioventa(true);
 
  }
  //maneja estados para redireccionar
  const handlersalir= (e)=>{
    setcambioproducto(false);
    setcambioprove(false);
    setcambioventa(false);
    setState({...state, 'cambio': false});
  }
//variables para cargar componentes
  let componenteprov;
  let componenteproduct;
  let componenteventa;

  if(cambioproducto){ //cambia al formulario del producto
    componenteventa=null;
     componenteprov=null;
     componenteproduct=<FormProd></FormProd>;
  }
  else if(cambioprove){ //cambia al formulario del proveedor
    componenteventa=null;
    componenteproduct=null;
    componenteprov=<FormProv></FormProv>;
  }
  else if(cambioventa){ //cambia al formulario de venta
    componenteventa=<Ventas></Ventas>;
    componenteproduct=null;
    componenteprov=null;
  }

  return(

    <div class="body">
      <div class="nav">
        <h1 >El BODEGON <span> DORADO</span></h1>
          <ul class="nav-links">
            <li>
              <button class="boton" onClick={handlerproducto} >Productos</button>
            </li>
            <li> <button class="boton" onClick={handlerprove} >Proveedores</button></li>
            <li> <button class="boton" onClick={handlerventa} >Ventas</button></li>
            <li><button class="boton" onClick={handlersalir} >Salir de la Aplicacion</button> </li>
          </ul>
      </div >
      <div>
            {componenteproduct}
            {componenteprov}
            {componenteventa}
      </div>
      
    </div>
  );
}
export default Principal;