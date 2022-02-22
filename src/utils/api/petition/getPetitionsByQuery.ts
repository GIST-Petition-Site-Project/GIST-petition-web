import api from '../axiosConfigs'
import qs from 'qs'
export const getPetitionsByQuery = async (query: QueryParams) => {
  const page = (Number(query?.page) || 1) - 1
  const querystring = {
    ...query,
    page,
  }
  console.log(query)
  console.log(qs.stringify(query))

  const response = await api.get(`petitions?${qs.stringify(querystring)}`)
  return response
}
