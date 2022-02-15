import api from '../axiosConfigs'

export const postAgreePetition = async (
  petitionId: string,
  payload: AgreePetition,
) => {
  const response = await api.post(`petitions/${petitionId}/agreements`, payload)
  return response.status
}
// export const postCreateComment = async (
//   petitionId: string,
//   payload: CommentInput,
// ) => {
//   const response = await api.post(`petitions/${petitionId}/comments`, payload)
//   return response.status
// }
