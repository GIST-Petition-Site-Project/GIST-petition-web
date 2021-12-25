import MainImg from '../../assets/img/gist_summer.jpg'
import { Search2Icon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import MainPrecaution from './MainPrecaution'

const MainBackgroundImage = styled.div`
  height: 80vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const SearchCurrentPetition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 400px;
`
const SearchCurrentPetition__Input = styled.input`
  width: 680px;
  height: 56px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0 20px;
  box-sizing: border-box;
`

// 토글 기능 추가해야합니다.
const Precaution = styled.div`
  background-color: #c4c4c4; // 잠정적인 컬러
  height: 80px;
  position: relative;
`

const DashBoard = styled.header`
  position:relative;
  padding: 10px;
  height 200px;
  text-align: center;
  line-height: 1.4;
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 3px 6px gray;
`

const Home = (): JSX.Element => {
  return (
    <>
      <div>
        <MainBackgroundImage
          style={{
            backgroundImage: `url(${MainImg})`,
          }}
        >
          <div>
            <SearchCurrentPetition>
              <SearchCurrentPetition__Input placeholder="현재 진행중인 청원 검색" />
              <Search2Icon style={{ marginLeft: '-40px' }} w={6} h={6} />
            </SearchCurrentPetition>
          </div>
        </MainBackgroundImage>
      </div>
      <Precaution>
        <MainPrecaution />
      </Precaution>
      <DashBoard>
        <div>
          지금까지,
          <br />총 <span style={{ color: '#D52425' }}>00</span>건의 청원과{' '}
          <span style={{ color: '#D52425' }}>00</span>건의 답변이 올라왔습니다.
        </div>
      </DashBoard>
    </>
  )
}

export default Home
