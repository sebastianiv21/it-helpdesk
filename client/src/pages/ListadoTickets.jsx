import { useState } from 'react'
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'
import {
  faMagnifyingGlass,
  faFileExcel,
  faFilePdf,
  faEraser,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import ListadoTicketData from '../shared/ListadoTicketData.js'
import FilaTicket from '../components/FilaTicket'
import Boton from '../components/Boton.jsx'

const ListadoTickets = () => {
  const [tickets, setTickets] = useState(ListadoTicketData)
  const listaTickets = tickets.map((item) => (
    <FilaTicket
      id={item.id}
      titulo={item.titulo}
      key={item.id}
      prioridad={item.prioridad}
      estado={item.estado}
      categoria={item.categoria}
      anssla={item.anssla}
      resolucionsla={item.resolucionsla}
      fechadecreacion={item.fechadecreacion}
    />
  ))

  return (
    <div className='container d-flex flex-column gap-3 mt-3 p-0'>
      <div>
        <h5 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
          Búsqueda
        </h5>
        <form className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'>
          <input
            type='text'
            name='busqueda'
            id='busqueda'
            className='form-control m-2'
            placeholder='Ingrese ID, Titulo, Prioridad, Estado, categoria o fecha de creación'
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
        {/* <!-- Ver como agregar boton de envio--> */}
        <div className='row p-2 mx-auto bg-primary rounded-top'>
          <div className='col input-group gap-1 p-0'>
            <Boton
              colorBtn='secondary'
              colorTxt='primary'
              texto='Generar'
              icono={faDownload}
            />
            <select
              name='informe'
              className='form-select border-success text-primary bg-secondary '
              id='informe'
            >
              <option value='informe'>Informe</option>
              <option value='cerrar'>Cerrar</option>
              <option value='eliminar'>Eliminar</option>
              <option value='cambiarEstado'>Cambiar Estado</option>
              <option value='cambiarPrioridad'>Cambiar Prioridad</option>
              <option value='cambiarCategoria'>Cambiar Categoria</option>
            </select>
          </div>
          <div className='col-8 d-flex bg-primary justify-content-center align-items-center'>
            <h5 className='text-white m-0'> {tickets.length} tickets</h5>
          </div>
        </div>
        <table
          border={1}
          className='table table-hover table-bordered text-center'
        >
          <thead className='text-primary bg-light text-center'>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Categoria</th>
              <th>ANS (SLA) </th>
              <th>Resolucion ANS (SLA)</th>
              <th>Fecha de creacion</th>
            </tr>
          </thead>
          <tbody className='bg-secondary'>{listaTickets}</tbody>
        </table>
      </div>
      <div className='row mb-4'>
        {/* <!--Botones--> */}
        <div className='col-sm'>
          <Boton
            icono={faFileExcel}
            colorBtn='primary'
            colorTxt='white'
            estilos='me-md-2'
          />
          <Boton
            icono={faFilePdf}
            colorBtn='primary'
            colorTxt='white'
          />
        </div>
        <div className='col-sm d-flex justify-content-center'>
          {/* <!--Botones--> */}
          {/* <div className="mx-auto">
          <button className="btn btn-primary text-white mx-1">1</button>
          <button className="btn btn-primary text-white mx-1">2</button>
          <button className="btn btn-primary text-white mx-1">3</button>
          <button className="btn btn-primary text-white mx-1">4</button>
          <button className="btn btn-primary text-white mx-1">5</button>
          <button className="btn btn-primary text-white mx-1">...</button>
        </div> */}
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

export default ListadoTickets
