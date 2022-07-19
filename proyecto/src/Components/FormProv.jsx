import '../Styles/formStyle.css';
function FormProv() {
    return(
    
        <div class="container">

<div class="row">
<form>
<fieldset>
<legend> NOMBRE </legend>
<input type="text" class="form-prov" id="nombre" />
<br />
<legend> RUC </legend>
<input type="text" class="form-prov" id="ruc" />
<br />
<legend> TELÉFONO </legend>
<input type="text" class="form-prov" id="telefono" />
<br />
<legend> DIRECCION </legend>
<input type="text" class="form-prov" id="direccion" />
<br />
<legend> CORREO</legend>
<input type="text" class="form-prov" id="correo" />
<br />
<hr />
<button type="button" id="crear" class="btn btn-success">Crear Tabla </button>
<button type="button" id="insertar" class="btn btn-success">Insertar Registro </button>
<button type="button" id="modificar" class="btn btn-danger">Modificar Registro </button>
<button type="button" id="listar" class="btn btn-success">Mostrar/Actualizar </button>
<button type="button" id="borrarTodo" class="btn btn-danger">ELIMINAR TODO </button>
</fieldset>
</form>
<hr />
</div>
</div>
        
       
        
   
    );
  }


export default FormProv;