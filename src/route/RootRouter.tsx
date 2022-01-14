import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import Posts from '../pages/Posts'
import Register from '../pages/Register'
import Write from '../pages/Write'
import { AuthRoute, UnauthRoute } from './PrivateRouter'

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UnauthRoute />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/register" element={<UnauthRoute />}>
          <Route index element={<Register />} />
        </Route>
        <Route path="/write" element={<AuthRoute />}>
          <Route index element={<Write />} />
        </Route>
        <Route path="/posts" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
