import React from 'react'

const CampoLogin = ({ identificacion, etiqueta }) => {
  return (
    <>
      <label
        htmlFor={identificacion}
        className='form-label m-0 me-2 text-primary'
      >
        {etiqueta}
      </label>
      <div className='w-100'>
        <input
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
