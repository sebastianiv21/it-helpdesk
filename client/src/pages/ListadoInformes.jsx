import { useState } from 'react'
import { faDownload, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap'
import Boton from '../components/Boton'
import FilaInforme from '../components/FilaInforme'
import ListadoInformesData from '../shared/ListadoInformesData'

const ListadoInformes = () => {
  const [informes, setInformes] = useState(ListadoInformesData)

  const listaInforme = informes.map((item) => (
    <FilaInforme
      compania={item.compania}
      fechaCreacion={item.fechaCreacion}
      key={item.id}
    />
  ))

  return (
    <div className='container'>
      <div className='row'>
        <div className='bg-primary d-flex p-2 position-relative rounded-top mt-3 align-items-center'>
          {/* <!--Primera fila--> */}

          <Boton
            icono={faDownload}
            estilos='me-2 ms-2'
            colorBtn='secondary'
            colorTxt='primary'
          />
          <Boton
            icono={faTrashCan}
            colorBtn='secondary'
            colorTxt='primary'
          />
          <h5 className='text-white m-0 mx-auto'>{informes.length} informes</h5>
        </div>
        <div className='p-0'>
          {/* <table className="table table-bordered table-hover text-center"> */}
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
                <th>
                  <label
                    htmlFor='compania'
                    className='form-label text-center'
                  >
                    Compañía
                  </label>
                  <div className='mx-auto'>
                    <select
                      name='compania'
                      id='compania'
                      className='form-select'
                    >
                      <option
                        selected
                        value=''
                        disabled
                      >
                        Seleccionar...
                      </option>
                      <option value='FAM'>Fundacion alto magdalena</option>
                      <option value='varisur'>Varisur</option>
                      <option value='LCC'>Liga contra el cancer</option>
                    </select>
                  </div>
                </th>
                <th>
                  <label
                    htmlFor='fechaCreacion'
                    className='form-label text-center'
                  >
                    Fecha de creación
                  </label>
                  <div className='mx-auto'>
                    <input
                      type='date'
                      name='fechaCreacion'
                      id='fechaCreacion'
                      className='form-control'
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='bg-secondary'>{listaInforme}</tbody>
            {/* </table> */}
          </Table>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
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
  )
}

export default ListadoInformes
