import api from '../axiosConfigs'
import qs from 'qs'

export const getMyPetitionsByQuery = async (query: QueryParams) => {
  const querystring = {
    ...query,
  }
  const response = await api.get(`petitions/me?${qs.stringify(querystring)}`)
  return response
}
