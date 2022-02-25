import { Container, PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import PaginationButtons from '@components/PaginationButtons'
import PetitionList from '@components/PetitionList'
import { getAnsweredByQuery } from '@api/petitionAPI'
import { useNavigate } from 'react-router-dom'
import Inner from '@components/Inner'

const AnsweredPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>답변된 청원</span>
          </div>
          <PetitionList getPetitions={getAnsweredByQuery} />
          <div>
            <PaginationButtons
              getPetitions={getAnsweredByQuery}
              pathname={'/answer'}
            />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default AnsweredPetitions
