import api from '../axiosConfigs'

export const getStateOfAgreement = async (postId: string) => {
  const response = await api.get(`posts/${postId}/agreements/me`)
  return [response.status, response.data]
}
