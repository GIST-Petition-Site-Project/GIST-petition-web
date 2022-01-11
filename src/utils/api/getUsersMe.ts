import axios from 'axios'
import { config, API_URL } from './axiosConfigs'

export const getUsersMe = async () => {
  const response = await axios.get(`${API_URL}users/me`, config)
  return response.status
}
