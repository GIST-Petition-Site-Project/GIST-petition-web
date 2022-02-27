import qs from 'qs'
import { useEffect, useState } from 'react'
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
          <div className="head_date">날짜</div>
          <div className="head_agreements">참여인원</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.map(petition => (
          <li key={petition.id}>
            <div className="category">{petition.categoryName}</div>
            <div className="subject">
              <Link to={`/petitions/${petition.id}`}>{petition.title}</Link>
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

export default PetitionList
