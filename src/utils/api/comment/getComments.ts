import api from '../axiosConfigs'

export const getComments = async (postId: string) => {
  const response = await api.get(`posts/${postId}/comments`)
  return [response.status, response.data]
}
