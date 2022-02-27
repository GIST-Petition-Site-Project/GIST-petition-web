import { getPetitionCount } from '@api/petitionAPI'
import Inner from '@components/Inner'
import { useEffect, useState } from 'react'
import { BannerSection } from './styles'

const Banner = (): JSX.Element => {
  const [petitionCount, setPetitionCount] = useState(0)

  const fetch = async () => {
    const response = await getPetitionCount()
    setPetitionCount(response?.data || 0)
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
                <span>0 개의 답변이 등록됐습니다</span>
              </span>
            </div>
          </Inner>
        </div>
      </div>
    </BannerSection>
  )
}

export default Banner
