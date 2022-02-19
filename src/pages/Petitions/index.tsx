// 청원 글 목록

import { Inner, PetitionBoard } from './styles'
import { Stack } from '@chakra-ui/react'
import PetitionList from '../../components/PetitionList'
import PaginationButtons from '../../components/PaginationButtons'
import qs from 'qs'
import { ChangeEvent, useState } from 'react'
import {
  PetitionsSelect,
  PetitionsText,
  PetitionsTitle,
  TabtitleWrapper,
  TabtitleText,
  PetitionsTab,
  PetitionsTabs,
  PetitionsTabList,
} from './styles'
import { Category } from '../../types/enums'
import { useNavigate } from 'react-router-dom'
import { getPetitionsByQuery, getBestPetitionsByQuery } from '../../utils/api'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
          <PetitionsText>모든 청원</PetitionsText>
        </PetitionsTitle>
        <PetitionsTabs isFitted>
          <PetitionsTabList>
            <PetitionsTab>진행중인 청원</PetitionsTab>
            <PetitionsTab>추천순 청원</PetitionsTab>
            <PetitionsTab>만료된 청원</PetitionsTab>
          </PetitionsTabList>
          <TabPanels>
            <TabPanel>
              <TabtitleWrapper>
                <TabtitleText>진행중인 청원</TabtitleText>
                <PetitionsSelect
                  onChange={handleSelect}
                  value={selected}
                  w={{ base: '90px', md: '128px' }}
                >
                  {catergoryIdx.map(item => (
                    <option value={item} key={item}>
                      {Category[item]}
                    </option>
                  ))}
                </PetitionsSelect>
              </TabtitleWrapper>
              <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
            </TabPanel>
            <TabPanel>
              <TabtitleWrapper>
                <TabtitleText h={{ base: '20px', md: '40px' }} mb="1px">
                  추천순 청원
                </TabtitleText>
              </TabtitleWrapper>
              <PetitionList
                getPetitions={getBestPetitionsByQuery}
              ></PetitionList>
            </TabPanel>
            <TabPanel>
              <TabtitleWrapper>
                <TabtitleText h={{ base: '20px', md: '40px' }} mb="1px">
                  만료된 청원
                </TabtitleText>
              </TabtitleWrapper>
              <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
            </TabPanel>
          </TabPanels>
        </PetitionsTabs>

        <Stack>
          <PaginationButtons
            getPetitions={getPetitionsByQuery}
            pathname={'/petitions'}
          />
        </Stack>
      </PetitionBoard>
    </Inner>
  )
}

export default Petitions
