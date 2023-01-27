import axios from '../api/axios';
import useData from './useData';

const useLogout = () => {
  const { setAuth } = useData();

  const logout = async () => {
    try {
      await axios.post('/auth/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
    setAuth({});
  };

  return logout;
};

export default useLogout;
