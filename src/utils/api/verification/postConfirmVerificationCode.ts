import api from '../axiosConfigs'

export const postConfirmVerificationCode = async (payload: {
  username: string
  verificationCode: string
}) => {
  const response = await api.post('username/confirm', payload)
  return [response.status, response.data.message || '']
}
