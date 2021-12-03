// 청원 Id로 해당 글, 글 좋아요, 댓글 조회
import { useParams } from 'react-router'
const Post = (): JSX.Element => {
  const params = useParams()
  return (
    <main>
      <p>Post id: {params.postId}</p>
    </main>
  )
}

export default Post
