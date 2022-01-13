import api from '../axiosConfigs'

export const getQueryPosts = async () => {
  const pageSize = 10
  const offset = 1
  const category = '전체'
  const response = await api.get(
    `posts?limit=${pageSize}&offset=${offset}&category=${category}`,
  )
  return [response.status, response.data]
}
