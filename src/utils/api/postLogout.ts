import axios from 'axios'
import { config } from './axiosConfigs'
const URL: string = process.env.REACT_APP_BASE_URL as string

export const postLogout = async () => {
  const response = await axios.post(`${URL}logout`, config)
  return response.status
}
