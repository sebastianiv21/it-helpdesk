import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../context/DataContext";

//Components
import Navbar from "./Navbar";

//Pages
import Inicio from "../pages/Inicio"
import Login from "../pages/Login"
//  Tickets
import CrearTicket from "../pages/CrearTicket"
import ListadoTickets from "../pages/ListadoTickets"
//  Clientes
import RegistrarCliente from "../pages/RegistrarCliente"
import ListadoClientes from "../pages/ListadoClientes"
//  Informes
import GenerarInforme from "../pages/GenerarInforme"
//  Not found
import NotFound from "../pages/NotFound";

const Main = () => {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear-ticket" element={<CrearTicket />} />
          <Route path="/listado-tickets" element={<ListadoTickets />} />
          <Route path="/registrar-cliente" element={<RegistrarCliente />} />
          <Route path="/listado-clientes" element={<ListadoClientes />} />
          <Route path="/generar-informe" element={<GenerarInforme />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </>
  );
};

export default Main;
