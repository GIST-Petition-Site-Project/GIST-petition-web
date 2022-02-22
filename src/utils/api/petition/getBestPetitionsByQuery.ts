import api from '../axiosConfigs'

export const getBestPetitionsByQuery = async (query: QueryParams) => {
  const size = Number(query?.size) || 5
  const response = await api.get(`petitions?size=${size}&sort=agreeCount,desc`)
  return response
}
