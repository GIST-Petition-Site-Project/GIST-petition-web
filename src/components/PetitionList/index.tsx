import { Text, UnorderedList, Tag } from '@chakra-ui/react'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import {
  PetitionAgreement,
  PetitionCategory,
  PetitionDate,
  PetitionItem,
  PetitionSubject,
  PetitionsAgreement,
  PetitionsCategory,
  PetitionsDate,
  PetitionsHead,
  PetitionsHeadWrap,
  PetitionsSubject,
  PetitionsStatus,
  PetitionStatus,
  PetitionStatusTag,
  Pwrapper,
} from './styles'

const PetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const status = await getPetitions(query)
    if (status[0] < 400) {
      setPetitionList(status[1].content)
    }
  }

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])

  useEffect(() => {
    queryPost(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead display={{ base: 'none', md: 'flex' }}>
        <PetitionsHeadWrap>
          <PetitionsStatus>진행 상황</PetitionsStatus>
          <PetitionsCategory>분류</PetitionsCategory>
          <PetitionsSubject>제목</PetitionsSubject>
          <PetitionsDate>날짜</PetitionsDate>
          <PetitionsAgreement>참여인원</PetitionsAgreement>
        </PetitionsHeadWrap>
      </PetitionsHead>

      <UnorderedList ml={0}>
        {petitionList.map(petition => (
          <PetitionItem key={petition.id}>
            <Pwrapper>
              <PetitionStatus position={{ md: 'absolute' }}>
                <PetitionStatusTag borderRadius={'none'}>
                  {!petition.answered ? '청원진행중' : '답변완료'}
                </PetitionStatusTag>
              </PetitionStatus>
              <PetitionCategory
                position={{ md: 'absolute' }}
                left={{ md: '100px' }}
                bottom={{ md: '0' }}
                top={{ md: '0' }}
                h={{ md: '16px' }}
                m={{ base: '0', md: 'auto' }}
                fontSize={{ base: '13px', md: '14px' }}
                pl={{ base: '5px', md: '0' }}
              >
                {petition.categoryName}
              </PetitionCategory>
            </Pwrapper>
            <PetitionSubject
              pb={{ base: '10px', md: '0' }}
              pl={{ base: '5px', md: '0' }}
              m={{ base: '5px 0 20px 0', md: '0 220px 0 250px' }}
            >
              <Link
                to={`/petitions/${petition.id}`}
                style={{ display: 'inline-block', width: '100%' }}
              >
                {petition.title}
              </Link>
            </PetitionSubject>
            <PetitionDate
              right={{ md: '90px' }}
              w={{ md: '130px' }}
              bottom={{ base: '20px', md: '0' }}
              top={{ md: '0' }}
              h={{ md: '16px' }}
              m={{ md: 'auto' }}
              pl={{ base: '5px', md: '0' }}
            >
              {petition.createdAt.slice(0, 10)}
            </PetitionDate>
            <PetitionAgreement
              w={{ md: '90px' }}
              bottom={{ base: '20px', md: '0' }}
              top={{ md: '0' }}
              h={{ md: '16px' }}
              m={{ md: 'auto' }}
              pr={{ base: '5px', md: '0' }}
            >
              {petition.agreements}
              <Text display={{ base: 'inline-block', md: 'none' }}>명</Text>
            </PetitionAgreement>
          </PetitionItem>
        ))}
      </UnorderedList>
      <Outlet />
    </>
  )
}

export default PetitionList
