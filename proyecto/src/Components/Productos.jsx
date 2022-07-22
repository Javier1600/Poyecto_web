import { useState } from 'react';
import '../Styles/productos.css';
import Ventas from './Ventas';

function Productos(){
  const ProdPrice = [
    {name:'Cerveza Pilsener 1L',price:'2.00'},
    {name:'Wiski OldTimes',price:'10.00'},
    {name:'Ron Abuelo',price:'15.00'},
    {name:'Switch',price:'3.00'},
    {name:'Cheestrees',price:'0.50'},
    {name:'Papas sin marca',price:'1.00'},
    {name:'Doritos',price:'0.50'},
    {name:'Chetos',price:'0.50'},
    {name:'Guitig',price:'1.00'},
    {name:'Coca cola 500 mL',price:'1.00'},
    {name:'Sprite 1L',price:'1.00'},
    {name:'Jugo del Valle',price:'1.00'},
    {name:'v220',price:'1.00'},
    {name:'Monster',price:'3.00'},
  ]
  var total = 0;

  const ProductosVendidos = [];
  const Vender = () => {
    console.log("Productos Vendidos: \n");
    prodList.forEach(element => {
      ProdPrice.forEach(element2 => {
        if(element === element2.name){
          //console.log("Nombre: " + element2.name + " Precio: "+ element2.price);
          ProductosVendidos.push(element2);
          console.log(ProductosVendidos);
          total = total + +element2.price;

        }
      });
    });
    console.log("El total de la venta es: " + total);
  }
  const [prodList, setProdList] = useState([]);
  const addProd = (newProd) => {
    setProdList([...prodList,newProd]);
  }
  const Venta = (e)=>{
    addProd(e.target.value);
  }
  return(
    <div class="body">
      <div class="nav">
        <h1 >El DODEGON <span> DORADO</span></h1>
          <ul class="nav-links">
            <li>
              <button class="boton" >Productos</button>
            </li>
            <li> <button class="boton" >Proveedores</button></li>
            <li><button class="boton" >Salir de la Aplicacion</button> </li>
          </ul>
      </div >
      <div class="contenedor">
        <ul >
            <li> 
              <img alt="" src= "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/61fc0c76c6f09009b71af7e1_Las%20cervezas%20m%C3%A1s%20populares%20del%20mundo.jpg" class="imagen"></img>
              <select onChange={Venta} class="boton1" > 
                <option>Bebidas Alcholicas</option>
                <option></option>
                <option>Cerveza Pilsener 1L</option>
                <option>Wiski OldTimes</option>
                <option>Ron Abuelo</option>
                <option>Switch</option>
              </select> 
            </li>
            <li> <img alt="" src= "https://static.wixstatic.com/media/289d3f_db9d6047d4ca4a41a06d514b845dd428~mv2.png/v1/fill/w_684,h_443,al_c,lg_1,q_85,enc_auto/289d3f_db9d6047d4ca4a41a06d514b845dd428~mv2.png" class="imagen">
                </img>
                <select onChange={Venta} class="boton1" > 
                <option >Snacks Varios</option>
                <option ></option>
                <option >Cheestrees</option>
                <option >Papas sin marca</option>
                <option >Doritos</option>
                <option >Chetos</option>
                </select>   
            </li>
            <li> <img alt="" src= "https://us.123rf.com/450wm/monticello/monticello1804/monticello180400214/103002391-poznan-polonia-6-de-abril-de-2018-botellas-de-marcas-mundiales-de-refrescos-incluidos-productos-de-c.jpg?ver=6" class="imagen">
                </img>
                <select onChange={Venta} class="boton1" > 
                
                <option >Bebidas No Alcholicas</option>
                <option ></option>
                <option >Guitig 1L</option>
                <option >Coca cola 500 mL</option>
                <option >Sprite 1L</option>
                <option >Jugo del Valle</option>
                <option >v220</option>
                <option >Monster</option>
                </select>   
             </li>
            </ul>
            <br />
            <br />
            <button class="boton1" onClick={Vender}>Vender</button>
      </div>
      <div class="blanco">
        <Ventas ProductosVendidos={ProductosVendidos} total={total}></Ventas>
      </div>
      
    </div>
  );
}
export default Productos;