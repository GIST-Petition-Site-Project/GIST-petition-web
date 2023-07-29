import qs from 'qs'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getDate } from '@utils/getTime'

import { PetitionsHead, PetitionsUl } from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'
import { useAppSelect } from '@redux/store.hooks'
import { koCategory, enCategory } from '../../types/enums'

const PetitionList = ({ getPetitions }: GetPetitions): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setPetitionList(response?.data?.content)
  }

  const lang = useAppSelect(select => select.lang.mode)

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
              <span>{t('empty')}</span>
            </div>
          ) : (
            <div className="empty_message">
              <span>{t('empty')}</span>
            </div>
          )
        ) : (
          <>
            {petitionList.map(petition => (
              <li key={petition.id}>
                <div className="category">
                  {lang === 'ko'
                    ? koCategory[petition.categoryId]
                    : enCategory[petition.categoryId]}
                </div>
                <div className="subject">
                  <Link to={`/petitions/${petition.id}`}>{petition.title}</Link>
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

export default PetitionList
