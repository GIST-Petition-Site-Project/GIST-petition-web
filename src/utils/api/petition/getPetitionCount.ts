import api from '../axiosConfigs'

export const getPetitionCount = async () => {
  const response = await api.get('petitions/count')
  return [response.status, response.data]
}
