import axios from 'axios'
import { API_URL, config } from './axiosConfigs'

export const postLogin = async (user: User) => {
  const response = await axios.post(`${API_URL}login`, user, config)
  return response.status
}
