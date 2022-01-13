import api from './axiosConfigs'

export const getCreatePost = async (payload: PostsInput) => {
  const response = await api.post('posts', payload)
  return response.status
}
