import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faTrash,
  faBan,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
import ModuloEdicionCliente from './ModuloEdicionCliente';
import { toast } from 'react-toastify';

const FilaCliente = ({
  id,
  email,
  nombre,
  apellidos,
  telefono,
  empresa,
  ubicacion,
  onDelete,
  onUpdate,
  errMsg,
  setErrMsg,
}) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);
  const [formData, setFormData] = useState({
    id,
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    ubicacion,
  });

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }
  }, [errMsg]);

  const deleteHandler = () => {
    onDelete(id);
    toggle();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    onUpdate(formData);
    toggleEdit();
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
        <td>{empresa}</td>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ubicacion}</td>
        <td>{telefono}</td>
        <td>{email}</td>
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
            onClick={deleteHandler}
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
            onClick={updateHandler}
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
