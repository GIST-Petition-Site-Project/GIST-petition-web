import axios from 'axios'
const URL: string = process.env.REACT_APP_BASE_URL as string

export const postLogin = async (
  email: string,
  password: string,
  // authToken: string, // 미구현
) => {
  const response = await axios.post(`${URL}register`, { email, password })
  console.log(response.status)
}
