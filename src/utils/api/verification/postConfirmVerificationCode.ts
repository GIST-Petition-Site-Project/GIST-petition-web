import api from '../axiosConfigs'

export const postConfirmVerificationCode = async (payload: {
  username: string
  verificationCode: string
}) => {
  const response = await api.post('sign-up/confirm', payload)
  console.log(response)
  return [response.status, response.data.message || '']
}
