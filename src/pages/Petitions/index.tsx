import { ChangeEvent, useMemo, useState } from 'react'
import {
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import PetitionList from '@components/PetitionList'
import PaginationButtons from '@components/PaginationButtons'
import qs from 'qs'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import { getPetitionsByQuery, getExpiredByQuery } from '@api/petitionAPI'
import { Container, PetitionBoard } from './styles'
import Inner from '@components/Inner'

const Petitions = (): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const countCategoryIdx = useMemo(() => {
    const numberOfCategory =
      Object.keys(Category).filter(el => isNaN(Number(el))).length - 1

    const catergoryIdx = Array(numberOfCategory)
      .fill(0)
      .map((_x, i) => i + 1)

    return catergoryIdx
  }, [])

  const [sortSelected, setSortSelected] = useState<string>(
    queryParams?.sort || '',
  )
  const [categorySelected, setCategorySelected] = useState<number>(
    queryParams?.category || 0,
  )
  const navigate = useNavigate()
  const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortSelected(e.target.value)
    const newSearchParams = {
      ...queryParams,
      page: 1,
      sort: e.target.value,
    }
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
      categoryId: Number(e.target.value),
    }
    navigate({
      pathname: '/petitions',
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }
  const setInitialState = () => {
    setSortSelected('createdAt,desc')
    setCategorySelected(0)
    const newSearchParams = {
      ...queryParams,
      sort: 'createdAt,desc',
      categoryId: 0,
      page: 1,
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
            <div className="selects">
              <Select onChange={handleSortSelect} value={sortSelected}>
                <option value={'createdAt,desc'}>최신순</option>
                <option value={'agreeCount,desc'}>추천순</option>
                <option value={'createdAt,asc'}>만료임박순</option>
              </Select>
              <Select onChange={handleCategorySelect} value={categorySelected}>
                {countCategoryIdx.map(item => (
                  <option value={item} key={item}>
                    {Category[item]}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <Tabs isFitted colorScheme="red">
            <TabList>
              <Tab onClick={setInitialState}>진행중인 청원</Tab>
              <Tab onClick={setInitialState}>만료된 청원</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
                <div className="pagination">
                  <PaginationButtons
                    getPetitions={getPetitionsByQuery}
                    pathname={'/petitions'}
                  />
                </div>
              </TabPanel>

              <TabPanel>
                <PetitionList getPetitions={getExpiredByQuery}></PetitionList>
                <div className="pagination">
                  <PaginationButtons
                    getPetitions={getExpiredByQuery}
                    pathname={'/petitions'}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default Petitions
