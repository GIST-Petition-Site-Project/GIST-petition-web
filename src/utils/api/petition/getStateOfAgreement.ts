import api from '../axiosConfigs'

export const getStateOfAgreement = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500, data: true }
  const response = await api.get(`petitions/${petitionId}/agreements/me`)
  return response
}
