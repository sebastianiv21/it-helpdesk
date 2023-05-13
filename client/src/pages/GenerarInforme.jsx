import {faFileExcel,faFilePdf} from '@fortawesome/free-solid-svg-icons'
import Boton from '../components/Boton'
import { useState, useEffect } from 'react';
import useData from '../hooks/useData';

const GenerarInforme = () => {
  const { getClientes, uniqueProperty } = useData();
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    getClientes().then((json) => {
      const empresas = uniqueProperty(json, 'empresa')
      setEmpresas(empresas);
      return empresas;
    });
  }, [getClientes, uniqueProperty]);

  const optEmpresas = empresas.map((empresa) => {
    return (
      <option
        key={empresa}
        value={`${empresa}`}
      >{`${empresa}`}</option>
    );
  });

  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Generacion de informes</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom'>
        <form className='d-flex justify-content-around'>
          {/* <!--Este es el formulario de la generacion de informes--> */}
          <div className='row d-flex mx-5'>
          <div className='d-flex flex-column'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Empresa
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Cliente
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Ubicacion
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Categoria
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          </div>
          <div className='row mx-5'>
          <div className='d-flex flex-column'>
            <label
              htmlFor='fechaInicio'
              className='form-label'
            >
              Fecha Inicio
            </label>
            <input
              type='date'
              name='fechaInicio'
              id='fechaInicio'
              className='form-control'
            />
          </div>
          <div className='d-flex flex-column'>
            <label
              htmlFor='fechaFinal'
              className='form-label'
            >
              Fecha Final
            </label>
            <input
              type='date'
              name='fechaFinal'
              id='fechaFinal'
              className='form-control'
            />
          </div>
          <div className='d-flex flex-column col-sm'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Prioridad
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label
              htmlFor='empresa'
              className='form-label'
            >
              Agente
            </label>
            <select
              name='empresa'
              id='empresa'
              className='form-select'
            >
              <option value=''>Seleccione empresa</option>
                  {optEmpresas}
            </select>
          </div>
          </div>
          < div className='row my-5 mx-4'>
            <Boton
            texto='Generar Excel'
            icono={faFileExcel}
            estilos='m-0 my-3'
            colorBtn='primary'
            colorTxt='white'
          /> 
          </div>
          <div className='row my-5 mx-4'>
          <Boton
            texto='Generar PDF'
            icono={faFilePdf}
            estilos='m-0 my-3'
            colorBtn='primary'
            colorTxt='white'
          />
          </div>
        </form>
      </div>
      <div>{/* En este div se encuentra el informe generado */}</div>
    </div>
  )
}

export default GenerarInforme
