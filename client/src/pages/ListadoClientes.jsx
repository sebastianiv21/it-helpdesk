import { useState, useEffect } from 'react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import FilaCliente from '../components/FilaCliente';
import useData from '../hooks/useData';
import SearchBarClientes from '../components/SearchBarClientes';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const ListadoClientes = () => {
  const { getClientes } = useData();
  const [clientes, setClientes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const CLIENTES_URL = '/clientes';

  const navigate = useNavigate();

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


  const onDelete = async (clienteId) => {
    try {
      const response = await axios.delete(CLIENTES_URL, {
        data: { id: clienteId },
      });
      toast.info(`Cliente eliminado exitosamente`, {
        theme: 'colored',
      });
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter((item) => item._id !== clienteId);
        return updatedItems;
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('No se pudo eliminar el cliente');
      }
    }
  };

  const onUpdate = async (formData) => {
    const { id, ...rest } = formData;

    try {
      const response = await axios.patch(CLIENTES_URL, formData);
      toast.info(`Cliente actualizado exitosamente`, {
        theme: 'colored',
      });
      const clientIndex = searchResults.findIndex(
        (client) => client._id === formData.id
      );
      const existingClient = searchResults[clientIndex];
      setSearchResults((prevItems) => {
        prevItems[clientIndex] = {
          ...existingClient,
          ...rest
        };
        const updatedItems = [...prevItems];
        return updatedItems;
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('La actualización del cliente falló');
      }
    }
  };

  const listaCliente = (data) => {
    return data.map((item) => (
      <FilaCliente
        key={item._id}
        id={item._id}
        email={item.email}
        nombre={item.nombre}
        apellidos={item.apellidos}
        telefono={item.telefono}
        empresa={item.empresa}
        ubicacion={item.ubicacion}
        onDelete={onDelete}
        onUpdate={onUpdate}
        errMsg={errMsg}
        setErrMsg={setErrMsg}
      />
    ));
  };

  return (
    <>
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
              <button
                className='btn btn-secondary text-primary'
                onClick={() => navigate('/registrar-cliente')}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
              <h5 className='text-white m-0 mx-auto align-self-center'>
                {searchResults.length} clientes
              </h5>
            </div>
            <Table
              bordered
              hover
              responsive
              striped
              className='text-center align-middle'
            >
              <thead className='bg-primary text-white'>
                <tr>
                  <th>Email</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Teléfono</th>
                  <th>Empresa</th>
                  <th>Ubicación</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody className='bg-secondary text-primary'>
                {listaCliente(currItems)}
              </tbody>
            </Table>
          </div>
          <div className='mt-2 d-flex justify-content-center'>
            {/* <!--Botones--> */}
            <Pagination>
              <PaginationItem onClick={() => setCurrPage(1)}>
                <PaginationLink
                  first
                  className={`text-white bg-${
                    currPage === 1 ? 'dark' : 'primary'
                  }`}
                  disabled={currPage === 1}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
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
      </div>
    </>
  );
};

export default ListadoClientes;
