import React from "react";
function Proveedor(props){
    const {ProvList} = props;
    return(
        ProvList.map((item, i) => 
        <table key={i}>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>RUC</td>
                    <td>Contacto</td>
                    <td>Correo</td>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.ruc}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                </tr>
            </tbody>
        </table>
    )
    );
}
export default Proveedor;