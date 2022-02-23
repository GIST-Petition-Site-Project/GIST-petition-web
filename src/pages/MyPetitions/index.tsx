import { PetitionBoard, PetitionsText, PetitionsTitle } from './styles'
import { Stack } from '@chakra-ui/react'
import PaginationButtons from '@components/PaginationButtons'
import { getMineByQuery } from '@api/petitionAPI'
import MyPetitionList from './MyPetitionList'
import { useNavigate } from 'react-router-dom'
import Inner from '@components/Inner'

const MyPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Inner>
      <PetitionBoard>
        <PetitionsTitle>
          <PetitionsText>나의 청원</PetitionsText>
        </PetitionsTitle>
        <MyPetitionList getPetitions={getMineByQuery} />
        <Stack>
          <PaginationButtons
            getPetitions={getMineByQuery}
            pathname={'/mypetitions'}
          />
        </Stack>
      </PetitionBoard>
    </Inner>
  )
}

export default MyPetitions
