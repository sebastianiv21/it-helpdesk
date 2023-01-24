import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faTrash,
  faBan,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
import ModuloEdicionTicket from './ModuloEdicionTicket';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const FilaTicket = ({
  id,
  titulo,
  prioridad,
  estado,
  categoria,
  fechadecreacion,
  fechadecierre,
  acciones,
}) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [formData, setFormData] = useState({
    id,
    prioridad,
    estado,
    acciones,
    fechadecierre
  });

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const TICKETS_URL = '/tickets';
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }
  }, [errMsg, id, formData]);

  const handleDelete = async (e) => {
    console.log(id);
    const ticketId = { id };

    try {
      const response = await axios.delete(TICKETS_URL, {
        data: ticketId,
      });
      toast.info(`Ticket ${id.slice(-6)} eliminado exitosamente`, {
        theme: 'colored',
      });
      toggle();
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('No se pudo eliminar el ticket');
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(TICKETS_URL, formData);
      toast.info(`Ticket ${id.slice(-6)} actualizado exitosamente`, {
        theme: 'colored',
      });
      toggleEdit();
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('La actualización del ticket falló');
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <tr>
        <td>{id.slice(-6)}</td>
        <td>{titulo}</td>
        <td>{prioridad}</td>
        <td>{estado}</td>
        <td>{categoria}</td>
        <td>{fechadecreacion}</td>
        <td>{fechadecierre}</td>
        <td>
          <div className='d-flex justify-content-evenly'>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
              // onClick={() => console.log(id)}
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
          Eliminar Ticket <strong>{id.slice(-6)}</strong>
        </ModalHeader>
        <ModalBody>
          Está seguro que desea eliminar permanentemente el ticket{' '}
          <strong>{id.slice(-6)}</strong>?
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            className='d-flex align-items-center m-2 gap-2'
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faBan} />
            Cancelar
          </Button>{' '}
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
        centered
        fullscreen
      >
        <ModalHeader toggle={toggleEdit}>
          Editar Ticket <strong>{id.slice(-6)}</strong>
        </ModalHeader>
        <ModalBody>
          <ModuloEdicionTicket onChange={onChange} data={formData} />
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

export default FilaTicket;
