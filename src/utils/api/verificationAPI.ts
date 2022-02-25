import api from './baseAPI'

export const postConfirmVerificationCode = async (payload: {
  username: string
  verificationCode: string
}) => {
  const response = await api.post('sign-up/confirm', payload)
  return response
}

export const postCreateVerificationCode = async (payload: {
  username: string
}) => {
  const response = await api.post('sign-up/verifications', payload)
  return response
}

export const postCreateVerificationCodeForPassword = async (payload: {
  username: string
}) => {
  const response = await api.post('find-password/verifications', payload)
  return response
}

export const postConfirmVerificationCodeForPassword = async (payload: {
  username: string
  verificationCode: string
}) => {
  const response = await api.post('find-password/confirm', payload)
  return response
}

export const putResetPassword = async (payload: {
  password: string
  username: string
  verificationCode: string
}) => {
  const response = await api.put('users/reset-password', payload)
  return response
}
