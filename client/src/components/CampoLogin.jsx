import React from 'react'
import { Input, Label } from 'reactstrap'

const CampoLogin = ({ identificacion, etiqueta }) => {
  return (
    <>
      <Label
        htmlFor={identificacion}
        className='form-label m-0 me-2 text-primary'
      >
        {etiqueta}
      </Label>
      <div className='w-100'>
        <Input
          type='text'
          name={identificacion}
          id={identificacion}
          className='form-control'
        />
      </div>
    </>
  )
}

export default CampoLogin
