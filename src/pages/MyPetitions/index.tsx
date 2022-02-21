import { PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import { PetitionsText, PetitionsTitle } from './styles'
import PaginationButtons from '../../components/PaginationButtons'
import { getMyPetitionsByQuery } from '../../utils/api'
import MyPetitionList from './MyPetitionList'
import { useNavigate } from 'react-router-dom'
import Inner from '../../components/Inner'

const MyPetitions = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Inner>
      <PetitionBoard>
        <PetitionsTitle>
          <PetitionsText>나의 청원</PetitionsText>
        </PetitionsTitle>
        <MyPetitionList getPetitions={getMyPetitionsByQuery} />
        <Stack>
          <PaginationButtons
            getPetitions={getMyPetitionsByQuery}
            pathname={'/mypetitions'}
          />
        </Stack>
      </PetitionBoard>
    </Inner>
  )
}

export default MyPetitions
