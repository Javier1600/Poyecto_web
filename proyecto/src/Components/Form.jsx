import '../Styles/formStyle.css';
function Form() {
    return(
    
        <div class="container">

<div class="row">
<form>
<fieldset>
<legend> PRODUCTO </legend>
<input type="text" class="form-control" id="item" />
<br />
<legend> PRECIO </legend>
<input type="number" step="0.01" class="form-control" id="precio" />
<br />
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


export default Form;