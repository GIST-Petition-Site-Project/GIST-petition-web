import api from '../axiosConfigs'

export const postAgreePetition = async (petitionId: string) => {
  const response = await api.post(`petitions/${petitionId}/agreements`, null)
  return response.status
}
