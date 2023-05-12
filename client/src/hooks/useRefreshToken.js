import axios from '../api/axios'
import { useData } from '@hooks'

const useRefreshToken = () => {
  const { setAuth } = useData()

  const refresh = async () => {
    const response = await axios.get('/auth/refresh', {
      withCredentials: true
    })
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken }
    })
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken
