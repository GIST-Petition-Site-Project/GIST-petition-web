import api from './axiosConfigs'

export const getUsersMe = async () => {
  const response = await api.get('users/me')
  return response.status
}
