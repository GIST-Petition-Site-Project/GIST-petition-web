interface Agreement {
  createdAt: string
  userId: number
}

interface PostResponse {
  accepted: number
  agreements: Array<Agreement>
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
