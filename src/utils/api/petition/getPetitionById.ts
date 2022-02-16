import api from '../axiosConfigs'

export const getPetitionById = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}`)
  return response
}
