import { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import {
  faMagnifyingGlass,
  faBan,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import FilaTicket from '../components/FilaTicket';
import Boton from '../components/Boton.jsx';
import ListadoAccionData from '../shared/ListadoAccionData.js';
import FilaAccion from '../components/FilaAccion.jsx';
import SearchBar from '../components/SearchBar.jsx';
import useData from '../hooks/useData.js';

const ListadoTickets = () => {
  const { getTickets } = useData();
  const [accion, setAccion] = useState(ListadoAccionData);
  const [tickets, setTickets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // Pagination
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleClick = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(searchResults.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    return (
      <PaginationItem
        key={number}
        id={number}
        onClick={() => handleClick(number)}
      >
        <PaginationLink
          //href='!#'
          className={`bg-${currPage === number ? 'secondary' : 'primary'} text-${
            currPage === number ? 'primary' : 'white'
          }`}
        >
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

  useEffect(() => {
    getTickets().then((json) => {
      setTickets(json);
      setSearchResults(json);
      return json;
    });
  }, [getTickets]);

  const listaAccion = accion.map((item) => (
    <FilaAccion
      fecha={item.fecha}
      key={item.id}
      encargado={item.encargado}
      accion={item.accion}
    />
  ));

  const listaTickets = (data) => {
    return data.map((item) => (
      <FilaTicket
        key={item._id}
        id={item._id}
        titulo={item.titulo}
        prioridad={item.prioridad}
        estado={item.estado}
        categoria={item.categoria}
        fechadecreacion={item.createdAt?.slice(0, 10)}
        fechadecierre={item.fechadecierre?.slice(0, 10) ?? 'En trámite'}
        accion={item.accion}
      />
    ));
  };
  return (
    <div className='container d-flex flex-column gap-3 mt-3 p-0'>
      <SearchBar
        items={tickets}
        setSearchResults={setSearchResults}
      />
      <div>
        {/* <!-- Ver como agregar boton de envio--> */}
        <div className='p-2 mx-auto bg-primary rounded-top'>
          <div className='d-flex bg-primary justify-content-center align-items-center'>
            <h5 className='text-white m-0'> {searchResults.length} tickets</h5>
          </div>
        </div>
        <table
          border={1}
          className='table table-hover table-bordered text-center'
        >
          <thead className='text-white bg-primary text-center'>
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
          <tbody className='bg-secondary text-primary'>
            {/* {listaTickets(searchResults)} */}
            {listaTickets(currItems)}
          </tbody>
        </table>
      </div>
      <div className='row mb-4'>
        <div className='col-sm d-flex justify-content-center'>
          {/* <!--Botones--> */}
          <Pagination>
            <PaginationItem onClick={() => setCurrPage(1)}>
              <PaginationLink
                first
                //href='#'
                className={`text-white bg-${
                  currPage === 1 ? 'dark' : 'primary'
                }`}
                disabled={currPage === 1}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                //href='#'
                previous
                onClick={() => setCurrPage((curr) => curr - 1)}
                className={`text-white bg-${
                  currPage === 1 ? 'dark' : 'primary'
                }`}
                disabled={currPage === 1}
              />
            </PaginationItem>
            {renderPageNumbers}
            <PaginationItem>
              <PaginationLink
                //href='#'
                next
                onClick={() => setCurrPage((curr) => curr + 1)}
                className={`text-white bg-${
                  currPage === pages.length ? 'dark' : 'primary'
                }`}
                disabled={currPage === pages.length}
              />
            </PaginationItem>
            <PaginationItem onClick={() => setCurrPage(pages.length)}>
              <PaginationLink
                //href='#'
                last
                className={`text-white bg-${
                  currPage === pages.length ? 'dark' : 'primary'
                }`}
                disabled={currPage === pages.length}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='bg-primary rounded-top p-2 d-flex gap-2'>
          <h4 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
            Modulo de edición
          </h4>
        </div>
        <div className='row d-flex justify-content-around mb-2 text-center mt-2 '>
          <div className='col-5'>
            <label htmlFor='prioridad'> Prioridad (*)</label>
            <select
              name='prioridad'
              className='form-select text-center mt-2'
              id='prioridad'
            >
              <option value='critica'>Critica</option>
              <option value='alta'>Alta</option>
              <option value='normal'>Normal</option>
              <option value='baja'>Baja</option>
            </select>
          </div>
          <div className='col-5'>
            <label htmlFor='estado'> Estado (*)</label>
            <select
              name='estado'
              className='form-select text-center mt-2'
              id='estado'
            >
              <option value='abierto'>Abierto</option>
              <option value='enEsperaUsuario'>En espera Usuario</option>
              <option value='respondidoUsuario'>Respondido Usuario</option>
              <option value='cerrado'>Cerrado</option>
            </select>
          </div>
        </div>
        <div className='d-flex justify-content-end p-3'>
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
      <div>
        <div className='bg-primary text-white rounded-top'>
          <h4 className='m-0 ps-4 py-3'>Historial de acciones</h4>
        </div>
        <div className='bg-secondary p-3 rounded-bottom text-primary'>
          <div className='row'></div>
          <form>
            <div className='row'>
              <div className='col-6'>
                <FormGroup className='custom-file'>
                  <Label
                    htmlFor='exampleFile'
                    className='bg-primary form-control text-white text-center mt-3'
                  >
                    Encargado de la acción
                  </Label>
                  <input
                    className=' form-control btn bg-white'
                    type='text'
                    id='valor'
                    placeholder='Digite el nombre del responsable de la ejecución'
                  />
                </FormGroup>
              </div>
              <div className='col-6'>
                <form className='bg-secondary rounded-bottom  d-flex justify-content-around'>
                  <FormGroup className='col-sm custom-file'>
                    <Label
                      htmlFor='exampleFile'
                      className='bg-primary form-control text-white text-center mt-3'
                    >
                      Busqueda
                    </Label>
                    <div className='input-group'>
                      <input
                        type='text'
                        name='filtrar'
                        id='filtrar'
                        className='form-control btn bg-white'
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
            <div className='row'>
              <div className='col-6 mt-2'>
                <FormGroup>
                  <Label
                    htmlFor='exampleText'
                    className='form-control bg-primary text-white text-center'
                  >
                    Nueva acción
                  </Label>
                  <Input
                    id='exampleText'
                    name='text'
                    type='textarea'
                    cols='60'
                    rows='10'
                    placeholder='Ingrese la accion y/o procedimiento realizado'
                  />
                </FormGroup>
              </div>
              <div className='col-6 mt-2 '>
                <table
                  border={1}
                  className='table table-hover table-bordered'
                  id='datatable'
                >
                  <thead>
                    <tr className='text-white text-center bg-primary'>
                      <th>Fecha</th>
                      <th>Encargado</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                  <tbody className='text-primary bg-white'>{listaAccion}</tbody>
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
