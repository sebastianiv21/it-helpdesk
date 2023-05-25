import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencil,
  faTrash,
  faBan,
  faFloppyDisk
} from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState, useEffect } from 'react'
import ModuloEdicionTicket from './ModuloEdicionTicket'
import { toast } from 'react-toastify'

const FilaTicket = ({
  id,
  empresa,
  cliente,
  titulo,
  prioridad,
  estado,
  categoria,
  fechadecreacion,
  fechadecierre,
  acciones,
  onDelete,
  onUpdate,
  errMsg,
  setErrMsg
}) => {
  const [modal, setModal] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [formData, setFormData] = useState({
    id,
    empresa,
    cliente,
    prioridad,
    estado,
    fechadecierre,
    acciones
  })
  const [formAccionData, setFormAccionData] = useState({
    fecha: '',
    descripcion: '',
    usuarioEncargado: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onChangeAccion = (e) => {
    setFormAccionData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const toggle = () => setModal(!modal)
  const toggleEdit = () => setModalEdit(!modalEdit)

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

  const deleteHandler = () => {
    onDelete(id)
    toggle()
  }

  const updateHandler = (e) => {
    e.preventDefault()
    onUpdate(formData)
    toggleEdit()
  }

  const addAccionHandler = () => {
    if (
      !formAccionData.fecha ||
      !formAccionData.descripcion ||
      !formAccionData.usuarioEncargado
    ) {
      return toast.error(`Ingrese todos los campos del formulario`, {
        theme: 'colored'
      })
    }

    setFormData((prevState) => ({
      ...prevState,
      acciones: [...prevState.acciones, { ...formAccionData }]
    }))
    onUpdate(formData)
    setFormAccionData({
      descripcion: '',
      fecha: '',
      usuarioEncargado: ''
    })
  }

  return (
    <>
      <tr>
        <td>{id.slice(-6)}</td>
        <td>{empresa}</td>
        <td>{cliente}</td>
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
      <Modal isOpen={modal} toggle={toggle} centered>
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
            onClick={deleteHandler}
          >
            <FontAwesomeIcon icon={faTrash} />
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
      {/* modal de edicion */}
      <Modal isOpen={modalEdit} toggle={toggleEdit} centered fullscreen>
        <ModalHeader toggle={toggleEdit}>
          Editar Ticket <strong>{id.slice(-6)}</strong>
        </ModalHeader>
        <ModalBody>
          <ModuloEdicionTicket
            onChange={onChange}
            onChangeAccion={onChangeAccion}
            data={formData}
            formAccionData={formAccionData}
            addAccionHandler={addAccionHandler}
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
  )
}

export default FilaTicket
