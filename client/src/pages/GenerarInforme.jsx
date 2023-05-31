import {
  faEye,
  faFileExcel,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, Input, Label, Button } from 'reactstrap'
import { useData, useDate } from '@hooks'
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocuPDF from '@components/DocuPDF'
import { format } from 'date-fns'
import { PDFViewer } from '@react-pdf/renderer'
import GraficoBarras from '@components/GraficoBarras'

const GenerarInforme = () => {
  const { getClientes, uniqueProperty } = useData()
  const [empresas, setEmpresas] = useState([])
  const [verPdf, setVerPdf] = useState(false)
  const { parseDate } = useDate()
  const nombreArchivo = `Informe-${format(new Date(), 'dd-MM-yyyy')}.pdf`

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

  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Generación de informes</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom'>
        <form>
          <div className='row d-flex justify-content-around mb-3 text-center'>
            <div className='col-sm'>
              <FormGroup>
                <Label for='fechaInicio'>Fecha Inicio</Label>
                <Input type='date' name='fechaInicio' id='fechaInicio' />
              </FormGroup>
            </div>
            <div className='col-sm'>
              <FormGroup>
                <Label for='fechaFinal'>Fecha Final</Label>
                <Input type='date' name='fechaFinal' id='fechaFinal' />
              </FormGroup>
            </div>
            <div className='col-sm'>
              <FormGroup>
                <Label for='empresa'>Empresa</Label>
                <Input type='select' name='empresa' id='empresa'>
                  <option value=''>Seleccione empresa</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </div>
          </div>
          <div className='row d-flex justify-content-around mb-3 text-center'>
            <div className='col-sm'>
              <FormGroup>
                <Label for='cliente'>Cliente</Label>
                <Input type='select' name='cliente' id='cliente'>
                  <option value=''>Seleccione cliente</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </div>
            <div className='col-sm'>
              <FormGroup>
                <Label for='categoria'>Categoría</Label>
                <Input type='select' name='categoria' id='categoria'>
                  <option value=''>Seleccione categoría</option>
                  {optEmpresas}
                </Input>
              </FormGroup>
            </div>
          </div>
          <div className='d-flex justify-content-end gap-2'>
            <Button
              type='button'
              onClick={() => setVerPdf(!verPdf)}
              color='primary'
              className='d-flex gap-2 align-items-center'
            >
              <FontAwesomeIcon icon={faEye} />
              {verPdf ? 'Ocultar pdf' : 'Ver pdf'}
            </Button>
            <PDFDownloadLink
              document={<DocuPDF poema={chartCanvas && chartDataURL} />}
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
        </form>
      </div>
      <div className='mt-3'>
        {verPdf ? (
          <PDFViewer style={{ width: '100%', height: '90vh' }}>
            <DocuPDF poema={chartCanvas && chartDataURL} />
          </PDFViewer>
        ) : null}
      </div>
      <div className='offcanvas'>
        <GraficoBarras />
      </div>
    </div>
  )
}

export default GenerarInforme
