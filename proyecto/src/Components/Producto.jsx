import React from "react";
function Producto(props){
    const {ProdList} = props; //recibe la lista 
    //retorna los valores en una tabla 
    return(
        ProdList.map((item, i) => 
        <table key={i}>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Marca</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.precio}</td>
                    <td>{item.marca}</td>
                </tr>
            </tbody>
        </table>
    )
    );
}
export default Producto;