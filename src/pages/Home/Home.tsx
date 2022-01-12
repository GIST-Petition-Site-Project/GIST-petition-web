import MainImg from '../../assets/img/gist_summer.jpg'
import { Search2Icon } from '@chakra-ui/icons'
import MainPrecaution from '../../components/MainPrecaution/MainPrecaution'
import {
  MainBackgroundImage,
  Inner,
  SearchCurrentPetition,
  SearchCurrentPetition__Input,
  DashBoard,
} from './style'

const Home = (): JSX.Element => {
  return (
    <div>
      <MainBackgroundImage
        style={{
          backgroundImage: `url(${MainImg})`,
        }}
      >
        <Inner>
          <SearchCurrentPetition>
            <SearchCurrentPetition__Input placeholder="현재 진행중인 청원 검색" />
            <Search2Icon
              style={{ marginLeft: '-40px' }}
              w={6}
              h={6}
              _hover={{ cursor: 'pointer' }}
            />
          </SearchCurrentPetition>
        </Inner>
      </MainBackgroundImage>

      <MainPrecaution />

      <DashBoard>
        <Inner>
          지금까지
          <br />총 <span style={{ color: '#D52425' }}>00</span>건의 청원과{' '}
          <span style={{ color: '#D52425' }}>00</span>개의 답변이 등록됐습니다
        </Inner>
      </DashBoard>
    </div>
  )
}

export default Home
