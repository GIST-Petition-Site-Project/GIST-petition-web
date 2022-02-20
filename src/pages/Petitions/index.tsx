import { Select, Stack } from '@chakra-ui/react'
import PetitionList from '../../components/PetitionList'
import PaginationButtons from '../../components/PaginationButtons'
import qs from 'qs'
import { ChangeEvent, useState } from 'react'
import { Container, PetitionBoard } from './styles'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import { getPetitionsByQuery } from '../../utils/api'
import Inner from '../../components/Inner'

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
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>모든 청원</span>
            <Select onChange={handleSelect} value={selected} w={'128px'}>
              {catergoryIdx.map(item => (
                <option value={item} key={item}>
                  {Category[item]}
                </option>
              ))}
            </Select>
          </div>
          <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
          <Stack>
            <PaginationButtons
              getPetitions={getPetitionsByQuery}
              pathname={'/petitions'}
            />
          </Stack>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default Petitions
