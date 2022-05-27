import { ChangeEvent, useCallback, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import PetitionList from '@components/PetitionList'
import PaginationButtons from '@components/PaginationButtons'
import qs from 'qs'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import {
  getPetitionsByQuery,
  getExpiredByQuery,
  getRejectedByQuery,
} from '@api/petitionAPI'
import { Container, PetitionBoard } from './styles'
import Inner from '@components/Inner'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const numberOfCategory = Object.keys(Category).filter(el =>
  isNaN(Number(el)),
).length

const catergoryIdx = Array(numberOfCategory)
  .fill(0)
  .map((_x, i) => i)

const Petitions = (): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

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

  const t = useTranslate(locale)

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>{t('allPetitions')}</span>

            <div className="selects">
              <div className="select_wrapper">
                <select onChange={handleSortSelect} value={sortSelected}>
                  <option value={'createdAt,desc'}>{t('latest')}</option>
                  <option value={'agreeCount,desc'}>{t('consented')}</option>
                  <option value={'createdAt,asc'}>{t('expiredNear')}</option>
                </select>
              </div>
              <div className="select_wrapper">
                <select
                  onChange={handleCategorySelect}
                  value={categorySelected}
                >
                  {catergoryIdx.map(item => (
                    <option value={item} key={item}>
                      {Category[item]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <Tabs isFitted colorScheme="red">
            <TabList>
              <Tab onClick={setInitialState}>{t('progress')}</Tab>
              <Tab onClick={setInitialState}>{t('expired')}</Tab>
              <Tab onClick={setInitialState}>{t('rejected')}</Tab>
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

              <TabPanel>
                <PetitionList getPetitions={getRejectedByQuery}></PetitionList>
                <div className="pagination">
                  <PaginationButtons
                    getPetitions={getRejectedByQuery}
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
