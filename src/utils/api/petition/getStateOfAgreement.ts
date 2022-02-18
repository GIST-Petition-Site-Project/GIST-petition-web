import api from '../axiosConfigs'

export const getStateOfAgreement = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500 }
  const response = await api.get(`petitions/${petitionId}/agreements/me`)
  return response
}
