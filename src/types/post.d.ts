interface PostResponse {
  accepted: number
  agreements: [
    {
      createdAt: string
      userId: number
    },
  ]
  answered: boolean
  category: string
  createdAt: string
  description: string
  id: number
  title: string
  updatedAt: string
  userId: number
}

interface PostId {
  postId: string
}
