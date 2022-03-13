import qs from 'qs'
import { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDay } from '@utils/getTime'

import { PetitionsHead, PetitionsUl } from './styles'

const PetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content)
  }

  const progress = useRef<string>(
    getPetitions.name === 'getPetitionsByQuery'
      ? '진행중인'
      : getPetitions.name === 'getExpiredByQuery'
      ? '만료된'
      : getPetitions.name === 'getAnsweredByQuery'
      ? '답변된'
      : '',
  )

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])

  useEffect(() => {
    queryPost(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <div className="head_wrap">
          <div className="head_category">분류</div>
          <div className="head_subject">제목</div>
          <div className="head_date">청원 기간</div>
          <div className="head_agreements">참여인원</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.length === 0 ? (
          <div className="empty_message">
            <span>{progress.current} 청원이 없습니다.</span>
          </div>
        ) : (
          <>
            {petitionList.map(petition => (
              <li key={petition.id}>
                <div className="category">{petition.categoryName}</div>
                <div className="subject">
                  <Link to={`/petitions/${petition.id}`}>{petition.title}</Link>
                </div>
                <div className="date">
                  {getDay(petition.createdAt)} ~{' '}
                  {getDay(petition.createdAt + 2592000000)}
                </div>
                <div className="agreements">
                  {petition.agreeCount}
                  <span>명</span>
                </div>
              </li>
            ))}
          </>
        )}
      </PetitionsUl>
      <Outlet />
    </>
  )
}

export default PetitionList
