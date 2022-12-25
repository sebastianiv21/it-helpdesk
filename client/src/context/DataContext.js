import { createContext, useState } from 'react';
import axios from '../api/axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const getTickets = async () => {
    try {
      const response = await axios.get('/tickets');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        getTickets,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
