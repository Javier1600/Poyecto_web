import React from "react";
// funcion que devuelve un  mensaje error 
function Error({mensaje}){
    return(
        <div className="error">
            {mensaje}
        </div>
    )
}
export default Error;