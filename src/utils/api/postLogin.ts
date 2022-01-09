import axios from 'axios'
import { postConfig } from './fetchConfigs'
const URL: string = process.env.REACT_APP_BASE_URL as string

// export const postLogin = async (input: User) => {
//   console.log(URL, input)
//   postConfig.data = input
//   const response = await axios(`${URL}login`, postConfig)
//   console.log(response.status)
//   return response.status
// }

export const postLogin = async (username: string, password: string) => {
  const response = await fetch(
    `${URL}login`,
    postConfig({ username, password }),
  )
  return response.status
}
