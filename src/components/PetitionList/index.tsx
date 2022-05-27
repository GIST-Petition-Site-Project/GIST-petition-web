import qs from 'qs'
import { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDay } from '@utils/getTime'

import { PetitionsHead, PetitionsUl } from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const PetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content)
  }

  const t = useTranslate(locale)

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])
  useEffect(() => {
    queryPost(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <div className="head_wrap">
          <div className="head_category">{t('category')}</div>
          <div className="head_subject">{t('title')}</div>
          <div className="head_date">{t('duration')}</div>
          <div className="head_agreements">{t('consent')}</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.length === 0 ? (
          location.pathname === '/' ? (
            <div className="empty_message" style={{ margin: '5em 0 1em 0' }}>
              <span>청원이 없습니다.</span>
            </div>
          ) : (
            <div className="empty_message">
              <span>청원이 없습니다.</span>
            </div>
          )
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
