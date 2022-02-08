interface CommentInput {
  content: string
}

interface CommentResponse {
  content: string
  createdAt: string
  id: number
  petitionId: number
  updatedAt: string
  userId: number
}
