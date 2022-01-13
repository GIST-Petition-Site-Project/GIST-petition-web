import api from '../axiosConfigs'

export const getNumberOfAgreement = async (postId: string) => {
  const response = await api.get(`posts/${postId}/agreements`)
  return [response.status, response.data]
}
