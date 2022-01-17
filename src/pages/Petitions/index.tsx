// 청원 글 목록

import { Inner, PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import PetitionList from './PetitionList'
import PaginationButtons from './PaginationButtons'

const Petitions = (): JSX.Element => {
  return (
    <Inner>
      <PetitionBoard>
        <PetitionList></PetitionList>
        {/* Paigination */}
        <Stack>
          <PaginationButtons></PaginationButtons>
        </Stack>
      </PetitionBoard>
    </Inner>
  )
}

export default Petitions
