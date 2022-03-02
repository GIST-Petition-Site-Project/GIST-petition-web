import qs from 'qs'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDay } from '@utils/getTime'

import { PetitionsUl, PetitionsHead, Status } from './styles'

const MyPetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const fetch = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content || [])
    console.log(response)
  }

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])
  console.log(petitionList)
  useEffect(() => {
    fetch(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <div className="head_wrap">
          <div className="head_status">진행 상황</div>
          <div className="head_category">분류</div>
          <div className="head_subject">제목</div>
          <div className="head_date">청원 기간</div>
          <div className="head_agreements">참여인원</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.map(petition => (
          <li key={petition.id}>
            <Status
              className="status"
              isAnswered={petition.answered}
              isExpired={petition.expired}
            >
              <div className="status_box">
                {petition.answered
                  ? '답변완료'
                  : petition.expired
                  ? '청원기간만료'
                  : petition.released
                  ? '청원진행중'
                  : '사전동의진행중'}
              </div>
            </Status>
            <div className="category">{petition.categoryName}</div>
            <div className="subject">
              <Link to={`/petitions/temp/${petition.tempUrl}`}>
                {petition.title}
              </Link>
            </div>
            <div className="date">
              {getDay(petition.createdAt)} ~{' '}
              {getDay(petition.createdAt + 2592000000)}
            </div>
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
