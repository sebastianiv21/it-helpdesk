import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faTrash,
  faBan,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import ModuloEdicionCliente from './ModuloEdicionCLiente';

const FilaCliente = ({
  id,
  email,
  nombre,
  apellidos,
  telefono,
  empresa,
  ubicacion,
}) => {
  const CLIENTES_URL = '/clientes';
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [formData, setFormData] = useState({
    id,
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    ubicacion,
  });
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }
  }, [errMsg, id, formData]);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const handleDelete = async (e) => {
    console.log(id);
    const clienteId = { id };

    try {
      const response = await axios.delete(CLIENTES_URL, {
        data: clienteId,
      });
      toast.info(`Cliente ${nombre} ${apellidos} eliminado exitosamente`, {
        theme: 'colored',
      });
      toggle();
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(CLIENTES_URL, formData);
      toast.info(`Cliente ${nombre} ${apellidos} actualizado exitosamente`, {
        theme: 'colored',
      });
      toggleEdit();
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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{telefono}</td>
        <td>{empresa}</td>
        <td>{ubicacion}</td>
        <td>
          <div className='d-flex justify-content-evenly'>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
              onClick={toggleEdit}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Button>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </td>
      </tr>
      {/* modal de eliminacion */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered
      >
        <ModalHeader toggle={toggle}>
          Eliminar Cliente <strong>{`${nombre} ${apellidos}`}</strong>
        </ModalHeader>
        <ModalBody>
          Está seguro que desea eliminar permanentemente el cliente
          <strong>{`${nombre} ${apellidos}`}</strong>?
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            className='d-flex align-items-center m-2 gap-2'
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faBan} />
            Cancelar
          </Button>
          <Button
            color='primary'
            className='d-flex align-items-center m-2 gap-2'
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
      {/* modal de edicion */}
      <Modal
        isOpen={modalEdit}
        toggle={toggleEdit}
        size='xl'
        centered
      >
        <ModalHeader toggle={toggleEdit}>
          Editar Cliente <strong>{`${nombre} ${apellidos}`}</strong>
        </ModalHeader>
        <ModalBody>
          <ModuloEdicionCliente
            onChange={onChange}
            data={formData}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            className='d-flex align-items-center m-2 gap-2'
            onClick={toggleEdit}
          >
            <FontAwesomeIcon icon={faBan} />
            Cancelar
          </Button>
          <Button
            color='primary'
            className='d-flex align-items-center m-2 gap-2'
            onClick={handleUpdate}
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
            Guardar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FilaCliente;
