import { ChangeEvent, useEffect, useState } from 'react'
import {
  Select,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import PetitionList from '../../components/PetitionList'
import PaginationButtons from '../../components/PaginationButtons'
import qs from 'qs'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import {
  getPetitionsByQuery,
  getBestPetitionsByQuery,
  getExpiredPetitionsByQuery,
} from '../../utils/api'
import { Container, PetitionBoard } from './styles'
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

  const [sortSelected, setSortSelected] = useState(queryParams?.sort || 0)

  const [categorySelected, setCategorySelected] = useState(
    queryParams?.category || 0,
  )
  const navigate = useNavigate()
  const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortSelected(e.target.value)
    console.log(e.target.value)
    const newSearchParams = {
      ...queryParams,
      page: 1,
      sort: e.target.value,
    }
    console.log(newSearchParams)
    navigate({
      pathname: '/petitions',
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }

  const handleCategorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategorySelected(Number(e.target.value))
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
            <div>
              <Select onChange={handleSortSelect} value={sortSelected}>
                <option value={''}>최신순</option>
                <option value={'agreeCount,desc'}>추천순</option>
              </Select>
              <Select onChange={handleCategorySelect} value={categorySelected}>
                {catergoryIdx.map(item => (
                  <option value={item} key={item}>
                    {Category[item]}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <Tabs isFitted colorScheme={'red'}>
            <TabList>
              <Tab>진행중인 청원</Tab>
              <Tab>만료된 청원</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
                <Stack>
                  <PaginationButtons
                    getPetitions={getPetitionsByQuery}
                    pathname={'/petitions'}
                  />
                </Stack>
              </TabPanel>

              <TabPanel>
                <PetitionList
                  getPetitions={getExpiredPetitionsByQuery}
                ></PetitionList>
                <Stack>
                  <PaginationButtons
                    getPetitions={getExpiredPetitionsByQuery}
                    pathname={'/petitions'}
                  />
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default Petitions
