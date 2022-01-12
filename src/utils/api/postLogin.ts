import api from './axiosConfigs'

export const postLogin = async (payload: User) => {
  const response = await api.post('login', payload)
  return response.status
}
