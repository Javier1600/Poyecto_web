import React from "react";

import '../Styles/loginStyle.css';
function Login(){
    return(
    <div className="login-box">
      <img src='https://cdn-icons.flaticon.com/png/512/3795/premium/3795330.png?token=exp=1658181314~hmac=9dea66d25e9613579388ddadff479baf' alt="Avatar" className="avatar" ></img>
      <label for="username">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <input type="submit" value="Log In"></input>
    </div>
    );
}
export default Login;