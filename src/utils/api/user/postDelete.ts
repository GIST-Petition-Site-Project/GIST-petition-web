import api from '../axiosConfigs'

export const postDelete = async (payload: { username: string }) => {
  const response = await api.delete(`users/username/${payload.username}`)
  return [response.status, response.data.message || '']
}
