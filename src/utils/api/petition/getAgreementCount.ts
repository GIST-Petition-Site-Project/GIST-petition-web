import api from '../axiosConfigs'

export const getAgreementCount = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/agreements`)
  return [response.status, response.data]
}
