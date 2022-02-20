import api from '../axiosConfigs'

export const postConfirmVerificationCodeForPassword = async (payload: {
  username: string
  verificationCode: string
}) => {
  const response = await api.post('find-password/confirm', payload)
  return response
}
