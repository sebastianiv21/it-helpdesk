const CampoFormulario = ({ nombre, etiqueta, onChange }) => {
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
        onChange={onChange}
      />
    </div>
  )
}

export default CampoFormulario
