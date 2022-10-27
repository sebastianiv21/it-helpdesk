import { useState } from 'react'
import {
  faMagnifyingGlass,
  faEraser,
  faUserPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'
import FilaCliente from '../components/FilaCliente'
import Boton from '../components/Boton'
import ListadoClientesData from '../shared/ListadoClientesData'

const ListadoClientes = () => {
  const [clientes, setClientes] = useState(ListadoClientesData)

  const listaCliente = clientes.map((item) => (
    <FilaCliente
      email={item.email}
      nombres={item.nombres}
      apellidos={item.apellidos}
      telefono={item.telefono}
      compania={item.compania}
      ubicacion={item.ubicacion}
      key={item.id}
    />
  ))

  return (
    <div className='container d-flex flex-column gap-3 mt-3'>
      <div>
        {/* <!--modulo busqueda--> */}

        <h5 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
          Búsqueda
        </h5>
        <form className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'>
          <input
            type='text'
            name='busqueda'
            id='busqueda'
            className='form-control m-2'
            placeholder='Ingrese nombre, apellido, email o teléfono del contacto'
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
            <h5 className='text-white m-0 mx-auto align-self-center'>
              {clientes.length} contactos
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
                <th>Teléfono</th>
                <th>Compañía</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody className='bg-secondary text-primary'>{listaCliente}</tbody>
            {/* </table> */}
          </Table>
        </div>
        <div className='mt-2 d-flex justify-content-center'>
          {/* <!--Botones--> */}
          {/* <button className="btn btn-primary text-white">1</button>
          <button className="btn btn-primary text-white">2</button>
          <button className="btn btn-primary text-white">3</button>
          <button className="btn btn-primary text-white">4</button>
          <button className="btn btn-primary text-white">5</button>
          <button className="btn btn-primary text-white">...</button> */}
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
    </div>
  )
}

export default ListadoClientes
