import { getAnsweredByQuery, getPetitionCount } from '@api/petitionAPI'
import Inner from '@components/Inner'
import { useEffect, useState } from 'react'
import { BannerSection } from './styles'
import qs from 'qs'

const Banner = (): JSX.Element => {
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
                지금까지 총 <span>{petitionCount}</span> 개의 청원과
              </span>
              <span>
                <span>
                  <span>{answeredCount}</span> 개의 답변이 등록됐습니다
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
