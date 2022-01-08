import axios from 'axios'
const URL: string = process.env.REACT_APP_BASE_URL as string

export const postLogin = async (username: string, password: string) => {
  const response = await axios.post(
    `${URL}login`,
    { username, password },
    {
      validateStatus: function (status) {
        return status < 500
      },
    },
  )
  console.log(response.status)
  return response.status
}
