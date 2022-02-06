import MainPrecaution from './MainPrecaution'
import {
  Inner,
  DashBoard,
  MainBackgroundImage,
  SloganFirstRow,
  SloganSecondRow,
} from './styles'
import { useEffect, useState } from 'react'
import { getPetitionCount } from '../../utils/api'

const Home = (): JSX.Element => {
  const [petitionCount, setPetitionCount] = useState(0)

  const getPetitionCountFunction = async () => {
    const status = await getPetitionCount()
    if (status[0] < 400) {
      setPetitionCount(status[1])
    }
  }
  useEffect(() => {
    getPetitionCountFunction()
  }, [])
  return (
    <section>
      <MainBackgroundImage>
        <Inner>
          <DashBoard>
            <SloganFirstRow>
              <div>
                지금까지 총{' '}
                <span style={{ color: '#FF0000' }}>{petitionCount}</span> 개의
                청원과
              </div>
            </SloganFirstRow>
            <SloganSecondRow>
              <span>0 개의 답변이 등록됐습니다</span>
            </SloganSecondRow>
          </DashBoard>
        </Inner>
      </MainBackgroundImage>
      <MainPrecaution></MainPrecaution>
    </section>
  )
}

export default Home
