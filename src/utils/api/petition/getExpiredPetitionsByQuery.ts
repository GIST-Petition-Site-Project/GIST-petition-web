import api from '../axiosConfigs'

export const getExpiredPetitionsByQuery = async (query: QueryParams) => {
  const size = Number(query?.size) || 10
  const page = Number(query?.page) || 1
  const response = await api.get(
    `petitions/expired?size=${size}&page=${page - 1}`,
  )
  return response
}
