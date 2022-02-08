// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'

const RootRouter = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default RootRouter
