import React from "react";
import avatar from '../img/usuario.png'

import '../Styles/loginStyle.css';
function Login(){
    return(
    <div className="login-box">
      <img src={avatar} alt="Avatar" className="avatar" ></img>
      <label for="username">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <input type="submit" value="Log In"></input>
    </div>
    );
}
export default Login;