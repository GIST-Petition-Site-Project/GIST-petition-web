import api from '../axiosConfigs'

export const getRetrieveAnswer = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500 }
  const response = await api.get(`petitions/${petitionId}/answer`)
  return response
}
