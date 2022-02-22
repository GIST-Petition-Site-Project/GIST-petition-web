import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Petition from '../pages/Petition'
import Petitions from '../pages/Petitions'
import Register from '../pages/Register'
import Write from '../pages/Write'
import MyPetitions from '../pages/MyPetitions'
import AnsweredPetitions from '../pages/AnsweredPetitions'
import { AuthRoute } from './PrivateRouter'
// import { AuthRoute, UnauthRoute } from './PrivateRouter'
import FindingPassword from '../pages/FindingPassword'
import NavBar from '../components/NavBar'

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<UnauthRoute />}> */}
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
        {/* <Route path="/register" element={<UnauthRoute />}> */}
        <Route path="/register" element={<Register />} />
        {/* </Route> */}
        <Route path="/write" element={<AuthRoute />}>
          <Route index element={<Write />} />
        </Route>
        <Route path="/petitions" element={<Outlet />}>
          <Route index element={<Petitions />} />
          <Route path=":petitionId" element={<Petition />} />
        </Route>
        <Route path="/petitions/temp" element={<Outlet />}>
          <Route path=":id" element={<Petition />} />
        </Route>
        <Route path="/mypetitions" element={<AuthRoute />}>
          <Route index element={<MyPetitions />} />
        </Route>
        <Route path="/findpassword" element={<FindingPassword />}></Route>
        <Route path="/answer" element={<Outlet />}>
          <Route index element={<AnsweredPetitions />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter
