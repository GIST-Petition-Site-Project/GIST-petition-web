import { Container, PetitionBoard } from './styles'
import PaginationButtons from '@components/PaginationButtons'
import PetitionList from '@components/PetitionList'
import { getRejectedByQuery } from '@api/petitionAPI'
import Inner from '@components/Inner'

const RejectedPetitions = (): JSX.Element => {
  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>답변된 청원</span>
          </div>
          <PetitionList getPetitions={getRejectedByQuery} />
          <div>
            <PaginationButtons
              getPetitions={getRejectedByQuery}
              pathname={'/rejected'}
            />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default RejectedPetitions
