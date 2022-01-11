import axios from 'axios'
import { config } from './axiosConfigs'
const URL: string = process.env.REACT_APP_BASE_URL as string

export const postLogin = async (user: User) => {
  console.log(user)
  const response = await axios.post(`${URL}login`, user, config)
  return response.status
}
