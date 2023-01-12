import { createContext, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const getTickets = async () => {
    try {
      const response = await axiosPrivate.get('/tickets');
      // console.log(response.data.reverse());
      return response.data.reverse();
    } catch (err) {
      console.error(err);
      navigate('/login', {state: {from: location}, replace: true});
    }
  };

  const getClientes = async () => {
    try {
      const response = await axiosPrivate.get('/clientes');
      // console.log(response.data);
      return response.data.reverse();
    } catch (err) {
      console.error(err);
      navigate('/login', {state: {from: location}, replace: true});
    }
  };

  const uniqueProperty = (array, property) => {
    return [...new Set(array.map(object => object[property]).filter(property => property !== null && property !== undefined))];
  }

  const countObjectsWithPropertyValue = (arr, prop, value) => {
    return arr.filter((obj) => obj[prop] === value).length;
  }

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        getTickets,
        getClientes,
        uniqueProperty,
        countObjectsWithPropertyValue
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
