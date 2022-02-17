import api from '../axiosConfigs'

export const getPetitionById = async (petitionId: string) => {
  const response = await api.get(petitionId)
  return response
}
