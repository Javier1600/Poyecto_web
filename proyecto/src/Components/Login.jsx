import React from "react";
import avatar from '../img/usuario.png'
import { useState } from 'react';
import '../Styles/loginStyle.css';
import Error from './Error.jsx';

const Login = (props) => {
  const {state, setState} = props; // paso de propiedades del app.js
  const usuarios=[ {name:'Javier',password:'1234'},{name:'Laura',password:'pelusa'},{name:'Joseph',password:'1234'}] //usuarios registrados
  const [error, setError]=useState(false);  //mensjae de error
const handlerpassword= (e)=>{
  setState({...state, 'password':  e.target.value}); // coge info del text box del password
}
const handlerusername= (e)=>{
  setState({...state, 'userName':  e.target.value}); // coge info del text box del username
}

const handlerlogin= (e)=>{
  //variables auxiliares para validar
  let ctrUserv = 0;
  let ctrPasswd = 0;
  usuarios.forEach(us=> {
    
    if(us.name===state.userName){
       ctrUserv = 1;
      if(us.password=== state.password){
        ctrPasswd = 1;
      }
    }
  });
  if(ctrPasswd === 1 && ctrUserv === 1){ //usuario valido
    setError(false); //no se muestra el menjase de error
    setState({...state, 'cambio': true}); // cambia el estado para mostrar la pagina principal
   
  }else{
    setError(true); //se muestra el mensaje de error
  }
}

//carga o no carga el error
let componente;
if(error){ //valida para lanzar el mensaje de error
  componente=< Error mensaje='Accesos denegado, verifique sus credenciales'/> 
}
else{
  componente=null;
}

//retorna estructura del login
    return(
    <div className="login-box">
      <img src={avatar} alt="Avatar" className="avatar" ></img>
      <label >Username</label>
        <input type="text" placeholder="Enter Username" onChange={handlerusername}></input>
        <label>Password</label>
        <input type="password" placeholder="Enter Password" onChange={handlerpassword}></input>
        <div className="contB">
        <button className="boton" onClick={handlerlogin}>Log in</button>  
        </div>
        <div className="error">
               {componente}  
        </div>
    </div>
    );
}
export default Login;