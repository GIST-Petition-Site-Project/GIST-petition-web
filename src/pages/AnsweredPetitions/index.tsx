import { PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import { PetitionsText, PetitionsTitle } from './styles'
import PaginationButtons from '../../components/PaginationButtons'
import PetitionList from '../../components/PetitionList'
import { getAnsweredPetitionsByQuery } from '../../utils/api/'
import { useNavigate } from 'react-router-dom'
import Inner from '../../components/Inner'

const AnsweredPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <Inner>
        <PetitionBoard>
          <PetitionsTitle>
            <PetitionsText>답변된 청원</PetitionsText>
          </PetitionsTitle>
          <PetitionList getPetitions={getAnsweredPetitionsByQuery} />
          <Stack>
            <PaginationButtons
              getPetitions={getAnsweredPetitionsByQuery}
              pathname={'/answer'}
            />
          </Stack>
        </PetitionBoard>
      </Inner>
    </>
  )
}

export default AnsweredPetitions
