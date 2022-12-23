import { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink, FormGroup, Label, Input } from 'reactstrap';
import {
  faMagnifyingGlass,
  faEraser,
  faBan,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons'
import ListadoTicketData from '../shared/ListadoTicketData.js'
import FilaTicket from '../components/FilaTicket'
import Boton from '../components/Boton.jsx'
import ListadoAccionData from '../shared/ListadoAccionData.js';
import FilaAccion from '../components/FilaAccion.jsx';
import useData from '../hooks/useData.js';

const ListadoTickets = () => {
  const { getTickets } = useData();
  const [accion, setAccion] = useState(ListadoAccionData);
  const [tickets, setTickets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getTickets().then((json) => {
      setTickets(json);
      setSearchResults(json);
      return json;
    });
  }, []);

  const listaAccion = accion.map((item) => (
    <FilaAccion
      fecha={item.fecha}
      key={item.id}
      encargado={item.encargado}
      accion={item.accion}
    />
  ));

  const listaTickets = tickets.map((item) => (
    <FilaTicket
      id={item._id}
      titulo={item.titulo}
      key={item._id}
      prioridad={item.prioridad}
      estado={item.estado}
      categoria={item.categoria}
      fechadecreacion={item.createdAt?.split('T')[0]}
      fechadecierre={item.fechadecierre?.split('T')[0] ?? 'En trámite'}
      accion={item.accion}
    />
  ));
  return (
    <div className='container d-flex flex-column gap-3 mt-3 p-0'>
      <div>
        <h5 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
          Búsqueda
        </h5>
        <form className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'>
          <input
            type='text'
            name='busqueda'
            id='busqueda'
            className='form-control m-2'
            placeholder='Ingrese ID, Titulo, Prioridad, Estado, categoria, fecha de creación o fecha de cierre'
          />
          <Boton
            icono={faMagnifyingGlass}
            colorBtn='primary'
            colorTxt='white'
            texto='Buscar'
            estilos='d-flex align-items-center m-2'
          />
          <Boton
            icono={faEraser}
            colorBtn='primary'
            colorTxt='white'
            texto='Limpiar'
            estilos='d-flex align-items-center m-2'
          />
        </form>
      </div>
      <div>
        {/* <!-- Ver como agregar boton de envio--> */}
        <div className='p-2 mx-auto bg-primary rounded-top'>
          <div className='d-flex bg-primary justify-content-center align-items-center'>
            <h5 className='text-white m-0'> {tickets.length} tickets</h5>
          </div>
        </div>
        <table
          border={1}
          className='table table-hover table-bordered text-center'
        >
          <thead className='text-primary bg-light text-center'>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Categoria</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Cierre</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody className='bg-secondary text-primary '>{listaTickets}</tbody>
        </table>
      </div>
      <div className='row mb-4'>
        <div className='col-sm d-flex justify-content-center'>
          {/* <!--Botones--> */}
          {/* <div className="mx-auto">
          <button className="btn btn-primary text-white mx-1">1</button>
          <button className="btn btn-primary text-white mx-1">2</button>
          <button className="btn btn-primary text-white mx-1">3</button>
          <button className="btn btn-primary text-white mx-1">4</button>
          <button className="btn btn-primary text-white mx-1">5</button>
          <button className="btn btn-primary text-white mx-1">...</button>
        </div> */}
          <Pagination>
            <PaginationItem>
              <PaginationLink
                first
                href='#'
                className='bg-primary text-white'
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                previous
                className='bg-primary text-white'
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                className='bg-primary text-white'
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                className='bg-primary text-white'
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                className='bg-primary text-white'
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                className='bg-primary text-white'
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                className='bg-primary text-white'
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                next
                className='bg-primary text-white'
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href='#'
                last
                className='bg-primary text-white'
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      <div className='bg-secondary rounded'>
      <div className='bg-primary rounded-top p-2 d-flex gap-2'>
      <h4 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
          Modulo de edición
        </h4>
          </div>
        <div className="row d-flex justify-content-around mb-2 text-center mt-2 p-4">
                                <div className="col-5">
                                    <label htmlFor="prioridad"> Prioridad (*)</label>
                                    <select name="prioridad" className="form-select text-center mt-1" id="prioridad">
                                    <option value="critica">Critica</option>
                                    <option value="alta">Alta</option>
                                    <option value="normal">Normal</option>
                                    <option value="baja">Baja</option>
                                    </select>        
                                </div>
                                <div className="col-5">
                                    <label for="estado"> Estado (*)</label>
                                    <select name="estado" className="form-select text-center mt-1" id="estado">
                                    <option value="abierto">Abierto</option>
                                    <option value="enEsperaUsuario">En espera Usuario</option>
                                    <option value="respondidoUsuario">Respondido Usuario</option>
                                    <option value="cerrado">Cerrado</option>
                                    </select>        
                                </div>
                            </div> 
      </div>
      <div>
            <div className="bg-primary text-white rounded-top">
            <h4 className="m-0 ps-4 py-3">Historial de acciones</h4>
            </div>
            <div className="bg-secondary p-3 rounded-bottom text-primary">
              <div className='row'>
              </div>
                        <form >
                            <div className="row">
                              <div className='col-6'>
                              <FormGroup className="custom-file">
                                        <Label for="exampleFile" className="bg-primary form-control text-white text-center mt-3">Encargado de la acción</Label>
                                        <div className='input-group'>
                                          <input
                                          type='text'
                                          name='valor'
                                          id='valor'
                                          className='form-control m-0'
                                          placeholder='Digite el nombre del responsable de la ejecución'
                                          />
                                        </div>
                              </FormGroup>
                              </div>
                              <div className='col-6'>
                              <form className='bg-secondary rounded-bottom  d-flex justify-content-around'>
                              <FormGroup className="col-sm custom-file" >
                              <Label for="exampleFile" className="bg-primary form-control text-white text-center mt-3">Busqueda</Label>
                              <div className='input-group'>
                              <input
                                  type='text'
                                  name='busqueda'
                                  id='busqueda'
                                  className='form-control m-0'
                                  placeholder='Ingrese fecha o encargado de la acción'
                                />
                                <Boton
                                icono={faMagnifyingGlass}
                                colorBtn='primary'
                                colorTxt='white'
                                texto='Filtrar'
                                estilos='d-flex align-items-center'
                              />
                              </div>
                               </FormGroup>
                              </form>
                              </div>
                            </div>
                    <div className="row">
                    <div className="col-6 mt-2">
                                <FormGroup>
                                <Label for="exampleText" className="form-control bg-primary text-white text-center">
                                Descripción de la  acción
                                </Label>
                                <Input id="exampleText" name="text" type="textarea" cols="60" rows="10" placeholder='Ingrese la accion y/o procedimiento realizado'/>
                                </FormGroup>
                            </div>
                            <div className="col-6 mt-2 ">
                                <table border={1} className="table table-hover table-bordered" id="datatable">
                                    <thead>
                                        <tr className="text-white text-center bg-primary">
                                            <th>Fecha</th>
                                            <th>Encargado</th> 
                                            <th>Accion</th> 
                                        </tr>
                                    </thead>
                                    <tbody className="text-primary bg-white">
                                        {listaAccion}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-end'>
                                <Boton
                                texto='Cancelar'
                                icono={faBan}
                                estilos='me-3'
                                colorBtn='primary'
                                colorTxt='white'
                                />
                                <Boton
                                texto='Guardar'
                                icono={faFloppyDisk}
                                estilos='me-5'
                                colorBtn='primary'
                                colorTxt='white'
                                />
                    </div>  
            </div>
        </div>
    </div>
  );
};
export default ListadoTickets;
