// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import Posts from '../pages/Posts'
import Register from '../pages/Register'
import Write from '../pages/Write'
import { setLogin } from '../redux/auth/authSlice'
import { getUsersMe } from '../utils/api'
import { AuthRoute, UnauthRoute } from './PrivateRouter'

const RootRouter = (): JSX.Element => {
  const dispatch = useDispatch()
  const isSessionValid = async () => {
    try {
      const status = await getUsersMe()
      if (status < 400) {
        dispatch(setLogin())
      }
    } catch (error) {
      console.log(error)
    }
  }
  isSessionValid()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UnauthRoute />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/posts" element={<AuthRoute />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
