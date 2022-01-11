import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRouter'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import NotFound from '../pages/NotFound'
import Write from '../pages/Write'

const MainRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/posts" element={<PrivateRoute />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MainRouter
