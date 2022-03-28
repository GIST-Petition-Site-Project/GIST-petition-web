import { Container, PetitionBoard } from './styles'
import PaginationButtons from '@components/PaginationButtons'
import PetitionList from '@components/PetitionList'
import { getAnsweredByQuery } from '@api/petitionAPI'
import { useNavigate } from 'react-router-dom'
import Inner from '@components/Inner'

const RejectedPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>답변된 청원</span>
          </div>
          <PetitionList />
          <div>
            <PaginationButtons pathname={'/answer'} />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default RejectedPetitions
