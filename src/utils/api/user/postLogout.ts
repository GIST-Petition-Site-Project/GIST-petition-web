import api from '../axiosConfigs'

export const postLogout = async () => {
  const response = await api.post('logout', null)
  return response.status
}
