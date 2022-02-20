import api from '../axiosConfigs'

export const postCreateVerificationCode = async (payload: {
  username: string
}) => {
  const response = await api.post('sign-up/verifications', payload)
  return response
}
