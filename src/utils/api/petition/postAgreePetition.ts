import api from '../axiosConfigs'

export const postAgreePetition = async (
  petitionId: string,
  payload: AgreePetition,
) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500 }
  const response = await api.post(`petitions/${petitionId}/agreements`, payload)
  return response
}
