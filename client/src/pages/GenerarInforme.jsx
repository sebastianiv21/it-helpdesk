import { faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, Input, Label, Button } from 'reactstrap'
import { useData } from '@hooks'
import { PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import DocuPDF from "@components/DocuPDF";

const GenerarInforme = () => {
  const { getClientes, uniqueProperty } = useData()
  const [empresas, setEmpresas] = useState([])

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

  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Generación de informes</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom'>
        <form>
          {/* <!--Este es el formulario de la generacion de informes--> */}

            <div className='row d-flex justify-content-around mb-3 text-center'>
            <div className='col-sm'>
              <FormGroup>
                <Label for='fechaInicio' >Fecha Inicio</Label>
                <Input
              type='date'
              name='fechaInicio'
              id='fechaInicio'
            />
              </FormGroup>
              </div>
              <div className='col-sm'>
              <FormGroup>
                <Label for='fechaFinal' >Fecha Final</Label>
                <Input
              type='date'
              name='fechaFinal'
              id='fechaFinal'
            />
              </FormGroup>
              </div>
              <div className='col-sm'>
              <FormGroup>
                <Label for='empresa' >Empresa</Label>
                <Input
              type='select'
              name='empresa'
              id='empresa'>
                <option value=''>Seleccione empresa</option>
                  {optEmpresas}
              </Input>
              </FormGroup>
              </div>
              </div>
            <div className='row d-flex justify-content-around mb-3 text-center'>
            <div className='col-sm'>
              <FormGroup>
                <Label for='cliente' >Cliente</Label>
                <Input
              type='select'
              name='cliente'
              id='cliente'>
                <option value=''>Seleccione cliente</option>
                  {optEmpresas}
              </Input>
              </FormGroup>
              </div>
              <div className='col-sm'>
              <FormGroup>
                <Label for='categoria' >Categoría</Label>
                <Input
              type='select'
              name='categoria'
              id='categoria'>
                <option value=''>Seleccione categoría</option>
                  {optEmpresas}
              </Input>
              </FormGroup>
              </div>
              </div>
            <div className='d-flex justify-content-end gap-2'>
                <Button color='primary' className='d-flex gap-2 align-items-center'>
                <FontAwesomeIcon icon={faFileExcel} />
                Generar Excel
                </Button>
                <PDFDownloadLink document={<DocuPDF />} fileName="informe.pdf">
                <Button color="primary" type="button" className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faFilePdf}  />Generar PDF </Button>
                </PDFDownloadLink>
            </div> 
        </form>
      </div>
      <div>{/* En este div se encuentra el informe generado */}</div>
    </div>
  )
}

export default GenerarInforme
