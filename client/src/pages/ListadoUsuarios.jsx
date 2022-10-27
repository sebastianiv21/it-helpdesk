import { useState } from 'react'
import FilaUsuario from "../components/FilaUsuario";
import ListadoUsuariosData from "../shared/ListadoUsuariosData";
const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState(ListadoUsuariosData)

  const listaUsuario = usuarios.map((item) => (
    <FilaUsuario
      foto={item.foto}
      nombres={item.nombres}
      apellidos={item.apellidos}
      cargo={item.cargo}
      key={item.id}
    />
  ))

  return (
    <div className="container m-4 mx-auto">
      <div className="bg-primary text-white rounded-top">
        <h3 className="m-0 ps-4 py-3">Usuarios</h3>
      </div>
      <div className="bg-secondary p-3 rounded-bottom text-primary gap-3 container">
        {listaUsuario}
      </div>
    </div>
 )
      
    
  
}

export default ListadoUsuarios