import api from './axiosConfigs'

export const postLogin = async (user: User) => {
  const response = await api.post('register', user)
  return response.status
}
