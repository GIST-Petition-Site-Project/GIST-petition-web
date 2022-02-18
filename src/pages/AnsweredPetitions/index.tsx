import { Inner, PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import { PetitionsText, PetitionsTitle } from './styles'
import { useNavigate } from 'react-router-dom'
import PaginationButtons from '../../components/PaginationButtons'
import PetitionList from '../../components/PetitionList'
import { getAnweredPetitionsByQuery } from '../../utils/api/petition/getAnsweredPetitionsByQuery'

const AnsweredPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <Inner>
        <PetitionBoard>
          <PetitionsTitle>
            <PetitionsText>답변된 청원</PetitionsText>
          </PetitionsTitle>
          <PetitionList getPetitions={getAnweredPetitionsByQuery} />
          <Stack>
            <PaginationButtons
              getPetitions={getAnweredPetitionsByQuery}
              pathname={'/answered'}
            />
          </Stack>
        </PetitionBoard>
      </Inner>
    </>
  )
}

export default AnsweredPetitions
