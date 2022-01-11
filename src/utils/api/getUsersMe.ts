import axios from 'axios'
import { config } from './axiosConfigs'
const URL: string = process.env.REACT_APP_BASE_URL as string

export const getUsersMe = async () => {
  const response = await axios.get(`${URL}users/me`, config)
  return response.status
}
