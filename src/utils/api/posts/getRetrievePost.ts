import api from '../axiosConfigs'

export const getRetrievePost = async (postId: string) => {
  const response = await api.get(`posts/${postId}`)
  return [response.status, response.data]
}
