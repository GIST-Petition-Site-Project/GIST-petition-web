import api from '../axiosConfigs'

export const getPetitionsByQuery = async (query: QueryParams) => {
  const size = Number(query?.size) || 10
  const page = Number(query?.page) || 1
  const category = Number(query?.category) || 0
  const response = await api.get(
    `petitions?size=${size}&page=${page - 1}&categoryId=${category}`,
  )
  return [response.status, response.data]
}
