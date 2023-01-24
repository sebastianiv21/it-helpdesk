const CampoFormulario = ({ nombre, etiqueta, onChange, value }) => {
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
        value={value}
      />
    </div>
  )
}

export default CampoFormulario
