import React from "react";
function Vendido(props){
    const {ProductosVendidos, total} = props;
    //imprime la tabla de productos vendidos y total de la venta
    return(
        ProductosVendidos.map((item, i) => 
        <div key={i}>
            <table>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
        </table>
        <p>La venta total es de: {total}</p>
        </div>
    ));
}
export default Vendido;