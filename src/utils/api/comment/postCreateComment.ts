import api from '../axiosConfigs'

export const postCreateComment = async (
  petitionId: string,
  payload: CommentInput,
) => {
  const response = await api.post(`petitions/${petitionId}/comments`, payload)
  return response.status
}
