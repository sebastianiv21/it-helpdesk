import {
  faEye,
  faFileExcel,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, Input, Label, Button, Form } from 'reactstrap'
import { useData, useDate } from '@hooks'
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocuPDF from '@components/DocuPDF'
import { format, parseISO, startOfDay, endOfDay } from 'date-fns'
import { PDFViewer } from '@react-pdf/renderer'
import GraficoInforme from '@components/GraficoInforme'
import { Container, Row, Col } from 'reactstrap'

const GenerarInforme = () => {
  const { getClientes, uniqueProperty } = useData()
  const [empresas, setEmpresas] = useState([])
  const [verPdf, setVerPdf] = useState(false)
  const { parseDate } = useDate()
  const nombreArchivo = `Informe-${format(new Date(), 'dd-MM-yyyy')}.pdf`
  const { formData, onChange } = useForm()

  useEffect(() => {
    getClientes().then((json) => {
      const empresas = uniqueProperty(json, 'empresa')
      setEmpresas(empresas)
      return empresas
    })
  }, [getClientes, uniqueProperty])

  const optEmpresas = empresas.map((empresa) => {
    return <option key={empresa} value={`${empresa}`}>{`${empresa}`}</option>
  })

  const chartCanvas = document.querySelector('canvas')
  const chartDataURL = chartCanvas && chartCanvas.toDataURL()

  const datosInforme = {
    fechaInicio: '2023-02-03',
    fechaFinal: '2023-02-03',
    empresa: 'Empresa 1',
    cliente: 'Cliente 1',
    ticketsAbiertos: 3,
    ticketsCerrados: 6,
    tickets: [
      {
        id: 1,
        empresa: 'Empresa 1',
        cliente: 'Cliente 1',
        titulo: 'Titulo 1',
        prioridad: 'Alta',
        estado: 'Abierto',
        categoria: 'Hardware',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 2,
        empresa: 'Empresa 2',
        cliente: 'Cliente 2',
        titulo: 'Titulo 2',
        prioridad: 'Media',
        estado: 'Cerrado',
        categoria: 'Software',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 3,
        empresa: 'Empresa 3',
        cliente: 'Cliente 3',
        titulo: 'Titulo 3',
        prioridad: 'Baja',
        estado: 'Abierto',
        categoria: 'Infraestructura',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        id: 4,
        empresa: 'Empresa 4',
        cliente: 'Cliente 4',
        titulo: 'Titulo 4',
        prioridad: 'Alta',
        estado: 'Cerrado',
        categoria: 'Servidores',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      

    ],
    categorias: [
      {
        nombre: 'Hardware',
        cantidad: 3,
        subcategorias: [
          {
            nombre: 'Escaner',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Software',
        cantidad: 6,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Infraestructura',
        cantidad: 9,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Servidores',
        cantidad: 12,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Ciberseguridad',
        cantidad: 14,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Seguridad Electrónica',
        cantidad: 4,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
      {
        nombre: 'Telecomunicaciones',
        cantidad: 3,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          }
        ]
      },
    ]
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { fechaInicio, fechaFinal } = formData

    const fechaInicioParseada = startOfDay(new Date(fechaInicio))
    const fechaFinalParseada = endOfDay(new Date(fechaFinal))

    console.log(fechaInicioParseada, fechaFinalParseada)
  }

  return (
    <Container className='m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Generación de informes</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom'>
        <Form>
          <Row className='d-flex justify-content-around mb-3 text-center'>
            <Col sm>
              <FormGroup>
                <Label for='fechaInicio'>Fecha Inicio</Label>
                <Input
                  type='date'
                  name='fechaInicio'
                  id='fechaInicio'
                  value={formData.fechaInicio}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='fechaFinal'>Fecha Final</Label>
                <Input
                  type='date'
                  name='fechaFinal'
                  id='fechaFinal'
                  value={formData.fechaFinal}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='empresa'>Empresa</Label>
                <Input type='select' name='empresa' id='empresa'>
                  <option value=''>Seleccione empresa</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className='d-flex justify-content-around mb-3 text-center'>
            <Col sm>
              <FormGroup>
                <Label for='cliente'>Cliente</Label>
                <Input type='select' name='cliente' id='cliente'>
                  <option value=''>Seleccione cliente</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='categoria'>Categoría</Label>
                <Input type='select' name='categoria' id='categoria'>
                  <option value=''>Seleccione categoría</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <div className='d-flex justify-content-end gap-2'>
            <Button
              type='submit'
              onClick={() => setVerPdf(!verPdf)}
              color='primary'
              className='d-flex gap-2 align-items-center'
            >
              <FontAwesomeIcon icon={faEye} />
              {verPdf ? 'Ocultar pdf' : 'Ver pdf'}
            </Button>
            <PDFDownloadLink
              document={
                <DocuPDF
                  grafica={chartCanvas && chartDataURL}
                  datos={datosInforme}
                />
              }
              fileName={nombreArchivo}
            >
              <Button
                color='primary'
                type='button'
                className='d-flex gap-2 align-items-center'
              >
                <FontAwesomeIcon icon={faFilePdf} />
                Generar PDF{' '}
              </Button>
            </PDFDownloadLink>
          </div>
        </Form>
      </div>
      <div className='mt-3'>
        {verPdf ? (
          <PDFViewer style={{ width: '100%', height: '90vh' }}>
            <DocuPDF
              grafica={chartCanvas && chartDataURL}
              datos={datosInforme}
            />
          </PDFViewer>
        ) : null}
      </div>
      <div className='offcanvas' style={{position:'relative', width:'80vw'}}>
        <GraficoInforme datos={datosInforme} />
      </div>
    </Container>
  )
}

export default GenerarInforme

// Se atendieron TANTOS tickets de la categoria TAL de los cuales TANTOS fueron resueltos y TANTOS no resueltos
