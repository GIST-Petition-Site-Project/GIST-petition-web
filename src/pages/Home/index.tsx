import MainImg from '../../assets/img/gist_summer.jpg'
import { Search2Icon } from '@chakra-ui/icons'
import MainPrecaution from './MainPrecaution'
import {
  MainBackgroundImage,
  Inner,
  SearchCurrentPetition,
  SearchCurrentPetition__Input,
  DashBoard,
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
    <div>
      <MainBackgroundImage
        style={{
          backgroundImage: `url(${MainImg})`,
        }}
      ></MainBackgroundImage>

      <MainPrecaution />

      <DashBoard>
        <Inner>
          지금까지
          <br />총 <span style={{ color: '#D52425' }}>{petitionCount}</span>건의
          청원과 <span style={{ color: '#D52425' }}>00</span>개의 답변이
          등록됐습니다
        </Inner>
      </DashBoard>
    </div>
  )
}

export default Home
