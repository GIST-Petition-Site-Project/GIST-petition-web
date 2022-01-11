import axios from 'axios'
import { config, API_URL } from './axiosConfigs'

export const postLogout = async () => {
  const response = await axios.post(`${API_URL}logout`, config)
  return response.status
}
