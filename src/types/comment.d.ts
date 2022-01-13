interface CommentInput {
  content: string
}

interface CommentResponse {
  content: string
  createdAt: string
  id: number
  postId: number
  updatedAt: string
  userId: number
}
