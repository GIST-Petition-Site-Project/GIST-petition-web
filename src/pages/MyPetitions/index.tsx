import { Container, PetitionBoard } from './styles'
import PaginationButtons from '@components/PaginationButtons'
import { getMineByQuery } from '@api/petitionAPI'
import MyPetitionList from './MyPetitionList'
import { useNavigate } from 'react-router-dom'
import Inner from '@components/Inner'

const MyPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>나의 청원</span>
          </div>
          <MyPetitionList getPetitions={getMineByQuery} />
          <div className="pagination">
            <PaginationButtons
              getPetitions={getMineByQuery}
              pathname={'/mypetitions'}
            />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default MyPetitions
