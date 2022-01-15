import api from '../axiosConfigs'

export const getQueryPosts = async (query: QueryParams) => {
  const response = await api.get(
    `posts?size=${query.size}&page=${query.page - 1}&categoryId=${
      query.category
    }`,
  )
  return [response.status, response.data]
}
