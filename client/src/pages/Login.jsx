

const Login = () => {
  return (
    <div className="container mt-5 mx-auto d-flex">
      <div className="rounded shadow-lg p-3 align-self-center mx-auto mt-5">
        <form>
        <div className="col-auto d-flex align-items-center mb-3 fs-4">
              <label htmlFor="Usuario" className="form-label m-0 me-2">
                Usuario
              </label>
              <div className="w-100"> 
              <input
                type="text"
                name="Usuario"
                id="Usuario"
                className="form-control"
              />
              </div>
            </div>
        <div className="col-auto d-flex align-items-center mb-3 fs-4">
              <label htmlFor="Contraseña" className="form-label m-0 me-2">
                Contraseña
              </label>
              <div className="w-100"> 
              <input
                type="password"
                name="Contraseña"
                id="Contraseña"
                className="form-control"
              />
              </div>
            </div>
            <div className="d-flex justify-content-end">
            <button className="btn btn-primary text-white me-3">
              <span className="ms-2">Iniciar sesion</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login