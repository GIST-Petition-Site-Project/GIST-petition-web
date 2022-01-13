import api from '../axiosConfigs'

export const postCreateComment = async (
  postId: string,
  payload: CommentInput,
) => {
  const response = await api.post(`posts/${postId}/comments`, payload)
  return response.status
}
