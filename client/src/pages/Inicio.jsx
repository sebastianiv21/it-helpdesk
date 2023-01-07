const Inicio = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0 " id="inicio">
       <div className="container mt-5">
          <div class="row justify-content-center">
            <div className="col-sm-5 me-5">
              <div className="card text-center">
                <div className="card-header bg-primary text-white">Tickets pendientes</div>
                 <div className="card-body">
                    <strong className="fs-1"><span id="daily_revenue">0</span></strong>
                  </div>
              </div>
            </div>
            <div className="col-sm-5 ms-5">
              <div className="card text-center">
                <div className="card-header bg-primary text-white">Tickets Prioritarios</div>
                 <div className="card-body">
                    <strong className="fs-1"><span id="daily_revenue">0</span></strong>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div className="align-self-center mt-0 pt-3">
          < img src="./images/logo.svg" alt="logo" className="img-fluid mx-auto d-block" width="400" />
          <h1 className="text-center text-primary fst-italic" id="inicioNombre">IT TECHNOLOGY R&M S.A.S</h1>
        </div>
    </div> 
  );
};

export default Inicio;
