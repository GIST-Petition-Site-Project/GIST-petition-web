import api from './axiosConfigs'

export const postRegister = async (payload: Register) => {
  const response = await api.post('users', payload)
  return response.status
}
