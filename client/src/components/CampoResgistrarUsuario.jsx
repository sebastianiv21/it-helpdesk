import React from 'react'

const CampoResgistrarUsuario = ({usuario,etiqueta}) => {
  return (
    <>
              <label htmlFor={usuario} className="form-label m-0 me-2">
                {etiqueta}(*)
              </label>
              <div className="w-100"> 
              <input
                type="text"
                name={usuario}
                id={usuario}
                className="form-control"
              />
              </div>
    </>
  )
}

export default CampoResgistrarUsuario
