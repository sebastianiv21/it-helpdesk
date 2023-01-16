import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';

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

  const toggle = () => setModal(!modal);
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
              onClick={() => console.log(id)}
            >
              <FontAwesomeIcon icon={faPencil} />
              Editar
            </Button>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faTrash} />
              Eliminar
            </Button>
          </div>
        </td>
      </tr>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={toggle}
          >
            Do Something
          </Button>{' '}
          <Button
            color='secondary'
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FilaTicket;
