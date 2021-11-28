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
