import { Text, UnorderedList } from '@chakra-ui/react'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDay } from '@utils/time'

import {
  PetitionsUl,
  PetitionCategory,
  PetitionsHead,
  PetitionStatus,
  PetitionStatusTag,
  PetitionTagWrapper,
} from './styles'

const MyPetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content || [])
  }

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])

  useEffect(() => {
    queryPost(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <div className="head_wrap">
          <div className="head_status">진행 상황</div>
          <div className="head_category">분류</div>
          <div className="head_subject">제목</div>
          <div className="head_date">날짜</div>
          <div className="head_agreements">참여인원</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.map(petition => (
          <li key={petition.id}>
            <PetitionTagWrapper>
              <PetitionStatus>
                <PetitionStatusTag>
                  {!petition.answered ? '청원진행중' : '답변완료'}{' '}
                </PetitionStatusTag>
              </PetitionStatus>
              <PetitionCategory className="category">
                {petition.categoryName}
              </PetitionCategory>
            </PetitionTagWrapper>
            <div className="subject">
              <Link to={`/petitions/temp/${petition.tempUrl}`}>
                {petition.title}
              </Link>
            </div>
            <div className="date">{getDay(petition.createdAt)}</div>
            <div className="agreements">
              {petition.agreements}
              <span>명</span>
            </div>
          </li>
        ))}
      </PetitionsUl>
      <Outlet />
    </>
  )
}

export default MyPetitionList
