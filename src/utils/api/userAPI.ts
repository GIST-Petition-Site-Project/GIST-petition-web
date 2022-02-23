import api from './baseAPI'

export const getUsersMe = async () => {
  const response = await api.get('users/me')
  return response.status
}

export const postLogin = async (payload: User) => {
  const response = await api.post('login', payload)
  return response.status
}

export const postLogout = async () => {
  const response = await api.post('logout', null)
  return response.status
}

export const postRegister = async (payload: Register) => {
  const response = await api.post('users', payload)
  return response
}

export const postDelete = async (payload: { username: string }) => {
  const response = await api.delete(`users/username/${payload.username}`)
  return response
}
