import api from '../axiosConfigs'

export const getComments = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/comments`)
  return [response.status, response.data]
}
