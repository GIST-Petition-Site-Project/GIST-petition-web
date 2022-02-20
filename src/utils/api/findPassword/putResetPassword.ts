import api from '../axiosConfigs'

export const putResetPassword = async (payload: {
  password: string
  username: string
  verificationCode: string
}) => {
  const response = await api.put('users/reset-password', payload)
  return response
}
