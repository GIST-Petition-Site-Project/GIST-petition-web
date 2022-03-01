import api from './baseAPI'
import qs from 'qs'

const isTempURL = () => {
  return location.pathname.includes('temp')
}

export const getId = async (param: string) => {
  if (location.pathname.includes('temp')) {
    const response = await api.get(`petitions/temp/${param}`)
    return response.data.id
  } else return param
}

export const getPetitionsByQuery = async (query: QueryParams) => {
  const page = (Number(query?.page) || 1) - 1
  const querystring = {
    ...query,
    page,
  }
  const response = await api.get(
    `petitions/ongoing?${qs.stringify(querystring)}`,
  )
  return response
}

export const getExpiredByQuery = async (query: QueryParams) => {
  const page = (Number(query?.page) || 1) - 1
  const querystring = {
    ...query,
    page,
  }
  const response = await api.get(
    `petitions/expired?${qs.stringify(querystring)}`,
  )
  return response
}

export const getMineByQuery = async (query: QueryParams) => {
  const querystring = {
    ...query,
  }
  const response = await api.get(`petitions/me?${qs.stringify(querystring)}`)
  return response
}

export const getAgreementCount = async (param: string) => {
  const id = await getId(param)
  const response = await api.get(`petitions/${id}/agreements`)
  return response
}

export const getAgreements = async (id: string, query: QueryParams) => {
  const size = Number(query?.size) || 10
  const page = Number(query?.page) - 1 || 0
  const response = await api.get(
    `petitions/${id}/agreements?size=${size}&page=${page}`,
  )
  return response
}

export const getPetitionById = async (id: string) => {
  const response = await api.get(`/petitions/${id}`)
  return response
}

export const getPetitionCount = async () => {
  const response = await api.get('petitions/count')
  return response
}

export const getStateOfAgreement = async (id: string) => {
  const response = await api.get(`petitions/${id}/agreements/me`)
  return response
}

export const postAgreePetition = async (id: string, payload: AgreePetition) => {
  const response = await api.post(`petitions/${id}/agreements`, payload)
  return response
}

export const postCreatePetition = async (payload: PetitionsInput) => {
  const response = await api.post('petitions', payload)
  return response
}

export const getRetrieveAnswer = async (petitionId: string) => {
  const response = await api.get(`petitions/${petitionId}/answer`)
  return response
}

export const getAnsweredByQuery = async (query: QueryParams) => {
  const size = Number(query?.size) || 10
  const page = Number(query?.page) || 1
  const response = await api.get(
    `petitions/answered?size=${size}&page=${page - 1}`,
  )
  return response
}
