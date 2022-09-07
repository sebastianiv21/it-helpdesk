import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //INICIO DATOS DE PRUEBA
  const usuario = {
    name: "Admin",
    lastname: ""
  };
  //FIN DATOS DE PRUEBA
  const [user, setUser] = useState(usuario);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
