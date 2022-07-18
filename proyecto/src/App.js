import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import Login from './Components/Login.jsx';

class App extends React.Component{
  render(){
    return(
      <Login> </Login>
    
    );
  }
}
/*
class App1 extends React.PureComponent{
  render(){
    return(
      <div className='App1'>
      <div>
        <h1>Escuela Politécnica Nacional</h1>
        <p>AWM</p>
      </div>
      <h2>Materias:</h2>
      <ul>
        <li>Aplicaciones Web y Móviles</li>
        <li>Aplicaciones Distribuidas</li>
        <li>Redes e Intranets</li>
      </ul>
    </div>
    )
  }
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;