import { getAnsweredByQuery, getPetitionCount } from '@api/petitionAPI'
import Inner from '@components/Inner'
import { useEffect, useState } from 'react'
import { BannerSection } from './styles'
import qs from 'qs'
import { useTranslate } from '@hooks/useTranslate'
import locale from './locale'

const Banner = (): JSX.Element => {
  const t = useTranslate(locale)

  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const [petitionCount, setPetitionCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  const fetch = async () => {
    const response = await getPetitionCount()
    const ans = await getAnsweredByQuery(queryParams)
    setPetitionCount(response?.data || 0)
    setAnsweredCount(ans?.data?.totalElements)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <BannerSection>
      <div className="banner_img">
        <div className="box_filter">
          <Inner>
            <div className="banner_dashboard">
              <span>
                {t('above1')}
                <span>{petitionCount}</span>
                {t('above2')}
              </span>
              <span>
                <span>
                  <span>{answeredCount}</span>
                  {t('below')}
                </span>
              </span>
            </div>
          </Inner>
        </div>
      </div>
    </BannerSection>
  )
}

export default Banner
