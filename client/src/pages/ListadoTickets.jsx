import { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import FilaTicket from '../components/FilaTicket';
import ListadoAccionData from '../shared/ListadoAccionData.js';
import FilaAccion from '../components/FilaAccion.jsx';
import SearchBar from '../components/SearchBar.jsx';
import useData from '../hooks/useData.js';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const ListadoTickets = () => {
  const { getTickets } = useData();
  const [accion, setAccion] = useState(ListadoAccionData);
  const [tickets, setTickets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const TICKETS_URL = '/tickets';
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
    getTickets().then((json) => {
      setTickets(json);
      setSearchResults(json);
      return json;
    });
  }, [getTickets]);

  const onDelete = async (ticketId) => {
    try {
      const response = await axios.delete(TICKETS_URL, {
        data: { id: ticketId },
      });
      toast.info(`Ticket eliminado exitosamente`, {
        theme: 'colored',
      });
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter((item) => item._id !== ticketId);
        return updatedItems;
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg(`${err}`);
        // setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('No se pudo eliminar el ticket');
      }
    }
  };

  const onUpdate = async (formData) => {
    const { id, ...rest } = formData;

    try {
      const response = await axios.patch(TICKETS_URL, formData);
      toast.info(`Ticket actualizado exitosamente`, {
        theme: 'colored',
      });
      const ticketIndex = searchResults.findIndex(
        (ticket) => ticket._id === formData.id
      );
      const existingTicket = searchResults[ticketIndex];
      setSearchResults((prevItems) => {
        prevItems[ticketIndex] = {
          ...existingTicket,
          ...rest
        };
        const updatedItems = [...prevItems];
        return updatedItems;
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg(`${err}`);
        // setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
        // setErrMsg(`${err}`);
      } else {
        setErrMsg('La actualización del cliente falló');
      }
    }
  };

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
        acciones={item.acciones}
        onDelete={onDelete}
        onUpdate={onUpdate}
        errMsg={errMsg}
        setErrMsg={setErrMsg}
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
          className='table table-hover table-bordered text-center align-middle'>
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
      {/* <ModuloEdicionTicket listaAccion={listaAccion} /> */}
    </div>
  );
};
export default ListadoTickets;
