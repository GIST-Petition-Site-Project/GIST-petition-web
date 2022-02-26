import api from './baseAPI'
import qs from 'qs'

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

export const getAgreementCount = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500 }
  const response = await api.get(`petitions/${petitionId}/agreements`)
  return response
}

export const getAgreements = async (petitionId: string, query: QueryParams) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return {
      status: 500,
      data: null,
    }
  const size = Number(query?.size) || 10
  const page = Number(query?.page) - 1 || 0
  const response = await api.get(
    `petitions/${petitionId}/agreements?size=${size}&page=${page}`,
  )
  return response
}

export const getPetitionById = async (petitionId: string) => {
  const response = await api.get(petitionId)
  return response
}

export const getPetitionCount = async () => {
  const response = await api.get('petitions/count')
  return response
}

export const getStateOfAgreement = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500, data: true }
  const response = await api.get(`petitions/${petitionId}/agreements/me`)
  return response
}

export const postAgreePetition = async (
  petitionId: string,
  payload: AgreePetition,
) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500 }
  const response = await api.post(`petitions/${petitionId}/agreements`, payload)
  return response
}

export const postCreatePetition = async (payload: PetitionsInput) => {
  const response = await api.post('petitions', payload)
  return response
}

export const getRetrieveAnswer = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined')
    return { status: 500, data: null }
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
