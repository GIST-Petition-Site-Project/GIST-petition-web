import MainPrecaution from './MainPrecaution'
import { Container } from './styles'
import Banner from './Banner'
import MainPetitions from './MainPetitions'

const Home = (): JSX.Element => {
  return (
    <Container>
      <Banner></Banner>
      <MainPrecaution></MainPrecaution>
      <MainPetitions></MainPetitions>
    </Container>
  )
}

export default Home
