import qs from 'qs'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDate } from '@utils/getTime'

import { PetitionsUl, PetitionsHead, Status } from './styles'
import locale from './locale'
// import { useAppSelect } from '@redux/store.hooks'
import { useTranslate } from '@hooks/useTranslate'
import { useAppSelect } from '@redux/store.hooks'
import { koCategory, enCategory } from '../../../types/enums'

const MyPetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const t = useTranslate(locale)

  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const fetch = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content || [])
  }
  const lang = useAppSelect(select => select.lang.mode)
  const [petitionList, setPetitionList] = useState<Array<Petition>>([])
  useEffect(() => {
    fetch(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <div className="head_wrap">
          <div className="head_status">{t('prgoress')}</div>
          <div className="head_category">{t('category')}</div>
          <div className="head_subject">{t('title')}</div>
          <div className="head_date">{t('duration')}</div>
          <div className="head_agreements">{t('supporters')}</div>
        </div>
      </PetitionsHead>

      <PetitionsUl className="petition_list">
        {petitionList.length === 0 ? (
          <div className="empty_message">
            <span>{t('empty')}</span>
            <br />
            <br />
            <span>{t('create')}</span>
          </div>
        ) : (
          <>
            {petitionList.map(petition => (
              <li key={petition.id}>
                <Status
                  className="status"
                  isAnswered={petition.status === 'ANSWERED'}
                  isExpired={petition.expired}
                  isRejected={petition.status === 'REJECTED'}
                >
                  <div className="status_box">
                    {petition.status === 'ANSWERED'
                      ? t('answered')
                      : petition.status === 'REJECTED'
                      ? t('rejected')
                      : petition.expired
                      ? t('expired')
                      : petition.status === 'RELEASED'
                      ? petition?.agreeCount >= 50
                        ? t('waiting')
                        : t('inProgress')
                      : t('prior')}
                  </div>
                </Status>
                <div className="category">
                  {lang === 'ko'
                    ? koCategory[petition.categoryId]
                    : enCategory[petition.categoryId]}
                </div>
                <div className="subject">
                  <Link to={`/petitions/temp/${petition.tempUrl}`}>
                    {petition.title}
                  </Link>
                </div>
                <div className="date">
                  {getDate(petition.createdAt)} ~{' '}
                  {getDate(petition.createdAt + 2592000000)}
                </div>
                <div className="agreements">
                  {petition.agreeCount} <span>{t('people')}</span>
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

export default MyPetitionList
