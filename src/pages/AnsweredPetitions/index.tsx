import { PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import { PetitionsText, PetitionsTitle } from './styles'
import PaginationButtons from '../../components/PaginationButtons'
import PetitionList from '../../components/PetitionList'
import { getAnweredPetitionsByQuery } from '../../utils/api/petition/getAnsweredPetitionsByQuery'
import qs from 'qs'
import { ChangeEvent, useState } from 'react'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'

import Inner from '../../components/Inner'

const AnsweredPetitions = (): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const numberOfCategory = Object.keys(Category).filter(el =>
    isNaN(Number(el)),
  ).length

  const catergoryIdx = Array(numberOfCategory)
    .fill(0)
    .map((_x, i) => i)

  const [selected, setSelected] = useState(queryParams?.category || 0)
  const navigate = useNavigate()
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value))
    const newSearchParams = {
      ...queryParams,
      page: 1,
      category: Number(e.target.value),
    }
    navigate({
      pathname: '/answer',
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }
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
              pathname={'/answer'}
            />
          </Stack>
        </PetitionBoard>
      </Inner>
    </>
  )
}

export default AnsweredPetitions
