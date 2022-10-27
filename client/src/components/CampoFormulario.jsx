const CampoFormulario = ({ nombre, etiqueta }) => {
  return (
    <div>
      <label
        htmlFor={nombre}
        className='form-label m-0'
      >
        {etiqueta} (*)
      </label>
      <input
        type='text'
        name={nombre}
        id={nombre}
        className='form-control'
      />
    </div>
  )
}

export default CampoFormulario
