import api from '../axiosConfigs'

export const postCreateVerificationCodeForPassword = async (payload: {
  username: string
}) => {
  const response = await api.post('find-password/verifications', payload)
  return response
}
