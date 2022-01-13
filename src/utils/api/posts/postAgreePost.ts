import api from '../axiosConfigs'

export const postAgreePost = async (postId: string) => {
  const response = await api.post(`posts/${postId}/agreements`, null)
  return response.status
}
