import React, {Component} from "react";
import '../Styles/loginStyle.css';
class Login extends Component{
    
  render(){

    return(
    <div className="login-box">
      <img src='https://cdn-icons-png.flaticon.com/512/2038/2038964.png' class="avatar" alt="Avatar Image"></img>
      <label for="username">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <input type="submit" value="Log In"></input>
        <a href="#">Lost your Password?</a><br/>
        <a href="#">Don't have An account?</a>
    </div>
    );
  }
}

export default Login;