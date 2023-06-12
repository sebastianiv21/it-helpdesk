import {
  faEye,
  faEyeSlash,
  faFilePdf,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  Container,
  Row,
  Col
} from 'reactstrap'
import { useData, useForm } from '@hooks'
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocuPDF from '@components/DocuPDF'
import { format } from 'date-fns'
import { PDFViewer } from '@react-pdf/renderer'
import GraficoInforme from '@components/GraficoInforme'
import { toast } from 'react-toastify'
import axios from '../api/axios'

const listadoCategorias = [
  {
    nombreCategoria: 'Hardware',
    subcategorias: [
      { nombre: 'Escáner' },
      { nombre: 'Impresora' },
      { nombre: 'Monitor' },
      { nombre: 'PC' },
      { nombre: 'Portátil' },
      { nombre: 'Servidor' },
      { nombre: 'Smartphone' },
      { nombre: 'UPS' }
    ]
  },
  {
    nombreCategoria: 'Software',
    subcategorias: [
      { nombre: 'Configuración periférico' },
      { nombre: 'Copia de información' },
      { nombre: 'Correo electrónico' },
      { nombre: 'Office' },
      { nombre: 'Sistema Operativo' }
    ]
  },
  {
    nombreCategoria: 'Infraestructura',
    subcategorias: [
      { nombre: 'Cableado estructurado' },
      { nombre: 'Caseta nodo' },
      { nombre: 'Sistema eléctrico' },
      { nombre: 'Solución solar' },
      { nombre: 'Torre de comunicaciones' }
    ]
  },
  {
    nombreCategoria: 'Servidores',
    subcategorias: [
      { nombre: 'Backup' },
      { nombre: 'Configuración' },
      { nombre: 'Cuentas de usuario' },
      { nombre: 'Políticas- Reglas' }
    ]
  },
  {
    nombreCategoria: 'Ciberseguridad',
    subcategorias: [
      { nombre: 'Antivirus' },
      { nombre: 'Firewall' },
      { nombre: 'VPN' }
    ]
  },
  {
    nombreCategoria: 'Seguridad electrónica',
    subcategorias: [
      { nombre: 'Biométrico' },
      { nombre: 'Cámara' },
      { nombre: 'Sensor' }
    ]
  },
  {
    nombreCategoria: 'Telecomunicaciones',
    subcategorias: [
      { nombre: 'Enlace satelital' },
      { nombre: 'Radio enlace terrestre' }
    ]
  }
]

const initialState = {
  fechaInicio: '',
  fechaFinal: '',
  empresa: '',
  categoria: ''
}

const GenerarInforme = () => {
  const { getClientes, uniqueProperty } = useData()
  const [empresas, setEmpresas] = useState([])
  const [verPdf, setVerPdf] = useState(false)
  const nombreArchivo = `Informe-${format(new Date(), 'dd-MM-yyyy')}.pdf`
  const { formData, onChange, onReset } = useForm(initialState)
  const INFORME_URL = '/informe'
  const [errMsg, setErrMsg] = useState('')
  const [datosInforme, setDatosInforme] = useState(null)

  useEffect(() => {
    console.log(formData)
  }, [formData])

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

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

  const categorias = listadoCategorias.map((categoria) => {
    return (
      <option key={categoria.nombreCategoria} value={categoria.nombreCategoria}>
        {categoria.nombreCategoria}
      </option>
    )
  })

  const chartCanvas = document.querySelector('canvas')
  const chartDataURL = chartCanvas && chartCanvas.toDataURL()

  // const datosInforme = {
  //   fechaInicio: '2023-02-03',
  //   fechaFinal: '2023-02-03',
  //   empresa: 'Empresa 1'.toUpperCase(),
  //   ticketsAbiertos: 3,
  //   ticketsCerrados: 6,
  //   tickets: [
  //     {
  //       titulo: 'El raton se comio los cables del pc',
  //       prioridad: 'Alta',
  //       estado: 'Abierto',
  //       categoria: 'Hardware',
  //       fechaCreacion: '2023-02-03',
  //       fechaCierre: '2023-02-03'
  //     },
  //     {
  //       titulo:
  //         'lola camino por la vereda cuidando que no se cayera al rio para llegar del otro lado con sus amigos',
  //       prioridad: 'Media',
  //       estado: 'Cerrado',
  //       categoria: 'Software',
  //       fechaCreacion: '2023-02-03',
  //       fechaCierre: '2023-02-03'
  //     },
  //     {
  //       titulo:
  //         'lola camino por la vereda cuidando que no se cayera al rio para llegar del otro lado con sus amigos',
  //       prioridad: 'Baja',
  //       estado: 'Abierto',
  //       categoria: 'Infraestructura',
  //       fechaCreacion: '2023-02-03',
  //       fechaCierre: '2023-02-03'
  //     },
  //     {
  //       titulo:
  //         'lola camino por la vereda cuidando que no se cayera al rio para llegar del otro lado con sus amigos',
  //       prioridad: 'Alta',
  //       estado: 'Cerrado',
  //       categoria: 'Servidores',
  //       fechaCreacion: '2023-02-03',
  //       fechaCierre: '2023-02-03'
  //     },
  //     {
  //       titulo: 'Titulo 4',
  //       prioridad: 'Alta',
  //       estado: 'Cerrado',
  //       categoria: 'Servidores',
  //       fechaCreacion: '2023-02-03',
  //       fechaCierre: '2023-02-03'
  //     }
  //   ],
  //   categorias: [
  //     {
  //       nombre: 'Hardware',
  //       cantidad: 3,
  //       subcategorias: [
  //         {
  //           nombre: 'Escaner',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Impresora',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Monitor',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'PC',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Portatil',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Servidor',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Smartphone',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'UPS',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Software',
  //       cantidad: 6,
  //       subcategorias: [
  //         {
  //           nombre: 'Configuración periferico',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Sistema Operativo',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Copia de información',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Correo electronico',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Office',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Infraestructura',
  //       cantidad: 9,
  //       subcategorias: [
  //         {
  //           nombre: 'Cableado estructurado',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Caseta nodo',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Sistema electronico',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Sistema electrico',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Solución solar',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Torre de comunicaciones',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Servidores',
  //       cantidad: 12,
  //       subcategorias: [
  //         {
  //           nombre: 'Backup',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Configuración',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Cuentas de usuario',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Politicas-Reglas',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Ciberseguridad',
  //       cantidad: 14,
  //       subcategorias: [
  //         {
  //           nombre: 'Antivirus',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Firewall',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'VPN',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Seguridad Electrónica',
  //       cantidad: 4,
  //       subcategorias: [
  //         {
  //           nombre: 'Biometrico',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Camara',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Sensor',
  //           cantidad: 3
  //         }
  //       ]
  //     },
  //     {
  //       nombre: 'Telecomunicaciones',
  //       cantidad: 3,
  //       subcategorias: [
  //         {
  //           nombre: 'Enlace satelital ',
  //           cantidad: 3
  //         },
  //         {
  //           nombre: 'Radio enlace terrestre',
  //           cantidad: 3
  //         }
  //       ]
  //     }
  //   ]
  // }

  const onSubmit = async (e) => {
    e.preventDefault()

    console.log(formData)

    try {
      const { data } = await axios.post(INFORME_URL, JSON.stringify(formData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      console.log(data)
      setDatosInforme(data)
      onReset()
      toast.info('Consulta realizada exitosamente', { theme: 'colored' })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('La consulta falló')
      }
    }
  }

  return (
    <Container className='m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Generación de informes</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom'>
        <Form onSubmit={onSubmit}>
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
          </Row>
          <Row className='d-flex justify-content-around mb-3 text-center'>
            <Col sm>
              <FormGroup>
                <Label for='empresa'>Empresa/Cliente</Label>
                <Input
                  type='select'
                  name='empresa'
                  id='empresa'
                  value={formData.empresa}
                  onChange={onChange}
                >
                  <option value=''>Seleccione empresa o cliente</option>
                  {optEmpresas}
                  <option value='Todas'>Todas</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='categoria'>Categoría</Label>
                <Input
                  type='select'
                  name='categoria'
                  id='categoria'
                  value={formData.categoria}
                  onChange={onChange}
                >
                  <option value=''>Seleccione categoría</option>
                  {categorias}
                  <option value='Todas'>Todas</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <div className='d-flex justify-content-end gap-2'>
            {datosInforme && (
              <>
                <Button
                  type='button'
                  onClick={() => setVerPdf(!verPdf)}
                  color='primary'
                  className='d-flex gap-2 align-items-center'
                >
                  <FontAwesomeIcon icon={verPdf ? faEyeSlash : faEye} />
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
                    Generar PDF
                  </Button>
                </PDFDownloadLink>
              </>
            )}
            <Button
              type='submit'
              color='primary'
              className='d-flex gap-2 align-items-center'
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Consultar
            </Button>
          </div>
        </Form>
      </div>
      <div className='mt-3'>
        {verPdf && datosInforme ? (
          <PDFViewer style={{ width: '100%', height: '90vh' }}>
            <DocuPDF
              grafica={chartCanvas && chartDataURL}
              datos={datosInforme && datosInforme}
            />
          </PDFViewer>
        ) : null}
      </div>
      <div
        className='offcanvas'
        style={{ position: 'relative', width: '80vw' }}
      >
        {datosInforme && <GraficoInforme datos={datosInforme} />}
      </div>
    </Container>
  )
}

export default GenerarInforme

// Se atendieron TANTOS tickets de la categoria TAL de los cuales TANTOS fueron resueltos y TANTOS no resueltos
