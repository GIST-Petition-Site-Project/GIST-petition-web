import api from './axiosConfigs'

export const getPostCount = async () => {
  const response = await api.get('posts/count')
  return [response.status, response.data]
}
