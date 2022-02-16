import api from '../axiosConfigs'

export const postAgreePetition = async (
  petitionId: string,
  payload: AgreePetition,
) => {
  const response = await api.post(`petitions/${petitionId}/agreements`, payload)
  return response
}
