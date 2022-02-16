import api from '../axiosConfigs'

export const getStateOfAgreement = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/agreements/me`)
  return response
}
