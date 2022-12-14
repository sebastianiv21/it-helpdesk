import { useState, useEffect } from 'react';
import {
  faMagnifyingGlass,
  faEraser,
  faUserPlus,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import FilaCliente from '../components/FilaCliente';
import Boton from '../components/Boton';
import useData from '../hooks/useData';
import SearchBarClientes from '../components/SearchBarClientes';

const ListadoClientes = () => {
  const { getClientes } = useData();
  const [clientes, setClientes] = useState([]);
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
          className={`bg-${
            currPage === number ? 'secondary' : 'primary'
          } text-${currPage === number ? 'primary' : 'white'}`}
        >
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

  useEffect(() => {
    getClientes().then((json) => {
      setClientes(json);
      setSearchResults(json);
      return json;
    });
  }, [getClientes]);

  const listaCliente = (data) => {
    return data.map((item) => (
      <FilaCliente
        key={item._id}
        email={item.email}
        nombres={item.nombre}
        apellidos={item.apellidos}
        telefono={item.telefono}
        compania={item.empresa}
        ubicacion={item.ubicacion}
      />
    ));
  };

  return (
    <div className='container d-flex flex-column gap-3 mt-3'>
      <div>
        {/* <!--modulo busqueda--> */}
        <SearchBarClientes
        items={clientes}
        setSearchResults={setSearchResults}
      />        
      </div>
      <div>
        {/* <!--listado de contactos--> */}
        <div>
          {/* <!--Primera fila--> */}
          <div className='bg-primary rounded-top p-2 d-flex gap-2'>
            <Boton
              icono={faUserPlus}
              colorBtn='secondary'
              colorTxt='primary'
            />
            <Boton
              icono={faTrashCan}
              colorBtn='secondary'
              colorTxt='primary'
            />
            <Boton
              icono={faPenToSquare}
              colorBtn='secondary'
              colorTxt='primary'
            />
            <h5 className='text-white m-0 mx-auto align-self-center'>
            {searchResults.length} clientes
            </h5>
          </div>
          {/* <table className="table table-hover table-bordered text-center"> */}
          <Table
            bordered
            hover
            responsive
            striped
            className='text-center'
          >
            <thead className='bg-primary text-white'>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tel??fono</th>
                <th>Empresa</th>
                <th>Ubicaci??n</th>
              </tr>
            </thead>
            <tbody className='bg-secondary text-primary'>{listaCliente(currItems)}</tbody>
            {/* </table> */}
          </Table>
        </div>
        <div className='mt-2 d-flex justify-content-center'>
          {/* <!--Botones--> */}
          <Pagination>
            <PaginationItem onClick={() => setCurrPage(1)}>
              <PaginationLink
                first
                //href='#'
                className='bg-primary text-white'
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
                className='bg-primary text-white'
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ListadoClientes;
