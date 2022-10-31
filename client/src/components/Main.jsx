import { Routes, Route } from 'react-router-dom'
import { DataProvider } from '../context/DataContext'

//Components
import Navbar from './Navbar'

//Pages
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
//  Tickets
import CrearTicket from '../pages/CrearTicket'
import CrearTicketRapido from '../pages/CrearTicketRapido'
import ListadoTickets from '../pages/ListadoTickets'
//  Clientes
import RegistrarCliente from '../pages/RegistrarCliente'
import ListadoClientes from '../pages/ListadoClientes'
//  Informes
import GenerarInforme from '../pages/GenerarInforme'
import ListadoInformes from '../pages/ListadoInformes'
//  Usuarios
import RegistrarUsuario from '../pages/RegistrarUsuario'
import ListadoUsuarios from '../pages/ListadoUsuarios'
//  Not found
import NotFound from '../pages/NotFound'

const Main = () => {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Inicio />}
          />
          <Route
            path='/it-helpdesk'
            element={<Inicio />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/crear-ticket'
            element={<CrearTicket />}
          />
          <Route
            path='/crear-ticket-rapido'
            element={<CrearTicketRapido />}
          />
          <Route
            path='/listado-tickets'
            element={<ListadoTickets />}
          />
          <Route
            path='/registrar-cliente'
            element={<RegistrarCliente />}
          />
          <Route
            path='/listado-clientes'
            element={<ListadoClientes />}
          />
          <Route
            path='/generar-informe'
            element={<GenerarInforme />}
          />
          <Route
            path='/listado-informes'
            element={<ListadoInformes />}
          />
          <Route
            path='/registrar-usuario'
            element={<RegistrarUsuario />}
          />
          <Route
            path='/listado-usuarios'
            element={<ListadoUsuarios />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </DataProvider>
    </>
  )
}

export default Main
