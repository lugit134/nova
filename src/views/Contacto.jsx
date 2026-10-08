export default function Contacto() {
  return (
    <>
    <form>
  <fieldset >
    <legend>Datos Usuario</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Nombre</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Ingerese el Nombre"/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Edad</label>
      <input type="number" id="disabledTextInput" class="form-control" placeholder="Ingrese su edad"/>
    </div>



    <button type="submit" class="btn btn-primary">Enviar</button>
  </fieldset>
</form>
    </>
  )
}
