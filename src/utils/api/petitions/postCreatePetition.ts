import api from '../axiosConfigs'

export const postCreatePetition = async (payload: PetitionsInput) => {
  const response = await api.post('petitions', payload)
  return response.status
}
