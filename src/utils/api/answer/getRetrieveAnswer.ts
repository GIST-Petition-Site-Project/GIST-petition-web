import api from '../axiosConfigs'

export const getRetrieveAnswer = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/answer`)
  return response
}
