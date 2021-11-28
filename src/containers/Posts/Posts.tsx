import { Link, Outlet } from 'react-router-dom'
const Posts = (): JSX.Element => {
  const posts = [
    {
      id: 1,
      content: 'hi',
    },
    {
      id: 2,
      content: 'hi2',
    },
    {
      id: 3,
      content: 'hi3',
    },
  ]
  return (
    <>
      <div>Post List </div>
      <nav>
        {posts.map(post => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            {post.id}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  )
}

export default Posts
