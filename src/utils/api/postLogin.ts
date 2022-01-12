import axios from 'axios'
import { config, API_URL } from './axiosConfigs'

export const postLogin = async (user: User) => {
  console.log(user)
  const response = await axios.post(`${API_URL}login`, user, config)
  return response.status
}
