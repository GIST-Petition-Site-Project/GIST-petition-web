import api from '../axiosConfigs'

export const getHomeAnsweredPetitionsByQuery = async (query: QueryParams) => {
  const size = Number(query?.size) || 5
  const response = await api.get(`petitions/answered?size=${size}`)
  return response
}
