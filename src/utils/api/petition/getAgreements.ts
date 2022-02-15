import api from '../axiosConfigs'

export const getAgreements = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/agreements`)
  return response
}
