import { Input, Label } from 'reactstrap'
const CampoFormulario = ({ nombre, etiqueta, onChange, value }) => {
  return (
    <div>
      <Label
        htmlFor={nombre}
        className='form-label m-0'
      >
        {etiqueta} (*)
      </Label>
      <Input
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
