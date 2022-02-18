import api from '../axiosConfigs'

export const getAgreements = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return {
      status: 500,
      data: null,
    }
  const response = await api.get(`petitions/${petitionId}/agreements`)
  return response
}
