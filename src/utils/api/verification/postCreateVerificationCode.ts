import api from '../axiosConfigs'

export const postCreateVerificationCode = async (payload: {
  username: string
}) => {
  const response = await api.post('username/verifications', payload)
  return [response.status, response.data.message || '']
}
