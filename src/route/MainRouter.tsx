import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRouter'
import Login from '../containers/Login/Login'
import Register from '../containers/Register/Register'
import Home from '../containers/Home/Home'
import Posts from '../containers/Posts/Posts'
import Post from '../containers/Posts/Post'
import NotFound from '../containers/NotFound/NotFound'

const MainRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
