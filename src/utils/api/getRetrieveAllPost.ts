import api from './axiosConfigs'

export const getRetrieveAllPost = async () => {
  const response = await api.get('posts')
  return [response.status, response.data.message]
}
