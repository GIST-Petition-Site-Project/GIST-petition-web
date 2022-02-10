import MainPrecaution from './MainPrecaution'
import {
  InnerWrap,
  Inner,
  DashBoard,
  MainBackgroundImage,
  SloganFirstRow,
  SloganSecondRow,
} from './styles'
import { useEffect, useState } from 'react'
import { getPetitionCount } from '../../utils/api'
import Footer from '../../components/Footer'
import PetitionList from '../../components/PetitionList'
import { getPetitionsByQuery } from '../../utils/api'

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
        <InnerWrap>
          <Inner>
            <DashBoard
              textAlign={{ base: 'center', md: 'left' }}
              bottom={{ base: '0', md: '3rem' }}
              top={{ base: '0', md: 'unset' }}
              left={{ base: '0', md: '2rem' }}
              fontSize={{ base: '1.5rem', md: '1.8rem', lg: '2rem' }}
            >
              <SloganFirstRow>
                지금까지 총{' '}
                <span style={{ color: '#FF0000' }}>{petitionCount}</span> 개의
                청원과
              </SloganFirstRow>
              <SloganSecondRow>
                <span>0 개의 답변이 등록됐습니다</span>
              </SloganSecondRow>
            </DashBoard>
          </Inner>
        </InnerWrap>
      </MainBackgroundImage>
      <MainPrecaution></MainPrecaution>
      <Inner>
        <PetitionList getPetitions={getPetitionsByQuery}></PetitionList>
      </Inner>
      <Footer></Footer>
    </section>
  )
}

export default Home
