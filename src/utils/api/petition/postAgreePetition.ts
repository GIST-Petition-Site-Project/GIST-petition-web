import api from '../axiosConfigs'

export const postAgreePetition = async (
  petitionId: string,
  payload: AgreePetition,
) => {
  if (petitionId.length === 6 || petitionId === 'undefined') return
  const response = await api.post(`petitions/${petitionId}/agreements`, payload)
  return response
}
