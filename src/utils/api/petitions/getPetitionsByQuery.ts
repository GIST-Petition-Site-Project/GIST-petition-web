import api from '../axiosConfigs'

export const getPetitionsByQuery = async (query: QueryParams) => {
  const response = await api.get(
    `petitions?size=${query.size}&page=${query.page - 1}&categoryId=${
      query.category
    }`,
  )
  return [response.status, response.data]
}
