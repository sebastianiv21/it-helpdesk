import axios from '../api/axios'
import { useData } from '@hooks'

const useLogout = () => {
  const { setAuth } = useData()

  const logout = async () => {
    try {
      await axios.post('/auth/logout', {
        withCredentials: true
      })
    } catch (err) {
      console.error(err)
    }
    setAuth({ nombreUsuario: '', contrasenha: '', accessToken: '' })
    window.sessionStorage.clear()
  }

  return logout
}

export default useLogout
