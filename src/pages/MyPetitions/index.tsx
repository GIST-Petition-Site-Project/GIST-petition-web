import PetitionList from '../../components/PetitionList'
import { Inner, PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import qs from 'qs'
import { ChangeEvent, useState } from 'react'
import { PetitionsText, PetitionsTitle } from './styles'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import PaginationButtons from '../../components/PaginationButtons'
import { getMyPetitionsByQuery } from '../../utils/api'

const MyPetitions = (): JSX.Element => {
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
      pathname: '/mypetitions',
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }
  return (
    <>
      <Inner>
        <PetitionBoard>
          <PetitionsTitle>
            <PetitionsText>나의 청원</PetitionsText>
          </PetitionsTitle>
          <PetitionList getPetitions={getMyPetitionsByQuery} />
          <Stack>
            <PaginationButtons
              getPetitions={getMyPetitionsByQuery}
              pathname={'/mypetitions'}
            />
          </Stack>
        </PetitionBoard>
      </Inner>
    </>
  )
}

export default MyPetitions

{
  /*
import { getPetitionsByQuery } from '../../utils/api'

const Petitions = (): JSX.Element => {
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
      pathname: '/petitions',
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }
  return (
    <Inner>
      <PetitionBoard>
        <PetitionsTitle>
          <PetitionsText>나의 청원</PetitionsText>
          <PetitionsSelect onChange={handleSelect} value={selected} w={'128px'}>
            {catergoryIdx.map(item => (
              <option value={item} key={item}>
                {Category[item]}
              </option>
            ))}
          </PetitionsSelect>
        </PetitionsTitle>
        <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
        <Stack>
          <PaginationButtons></PaginationButtons>
        </Stack>
      </PetitionBoard>
    </Inner>
  )
}

*/
}