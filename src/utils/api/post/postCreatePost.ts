import api from '../axiosConfigs'

export const postCreatePost = async (payload: PostsInput) => {
  const response = await api.post('posts', payload)
  return response.status
}
