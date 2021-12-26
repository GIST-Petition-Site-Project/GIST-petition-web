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

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`

const SearchCurrentPetition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  height: 100px;
  border-radius: 5px;
  background-color: rgba(56, 64, 70, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const SearchCurrentPetition__Input = styled.input`
  width: 680px;
  height: 50px;
  border: 2px solid black;
  border-radius: 5px 5px 0px 5px;
  padding: 0 20px;
  box-sizing: border-box;
`

// 토글 기능 추가해야합니다.
// styled 컴포넌트를 쓰니까 블록이 겹치는 현상이 있네요...
// 일단 주석처리 해놨습니다.
// const Precautions = styled.div`
//   position: relative;
//   margin: 0 auto;
//   background-color: #c4c4c4; // 잠정적인 컬러
//   height: 50px;
// `
const Container = styled.div`
  display: block;
`

const DashBoard = styled.div`
  position: relative;
  text-align: center;
  line-height: 1.4;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  letter-spacing: 0.1em;
  margin: 50px 0;
`

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
