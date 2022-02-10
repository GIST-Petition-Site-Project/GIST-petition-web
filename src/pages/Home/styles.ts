import styled from '@emotion/styled'
import theme from '../../style/theme'
import MainImg from '../../assets/img/gist_summer.jpg'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'

const MainBackgroundImage = styled.div`
  position: relative;
  background-image: url(${MainImg});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const InnerWrap = styled(Box)`
  backdrop-filter: blur(2px);
  height: 100%;
`
const Inner = styled(Box)`
  max-width: ${theme.space.INNER_MAXWIDTH};
  position: relative;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
  text-align: center;
`

const DashBoard = styled(Box)`
  position: absolute;
  display: flex;
  margin: auto;
  right: 0;
  height: 88px;
  flex-direction: column;
  font-weight: bold;
  color: ${theme.color.WHITE};
  line-height: 1.5em;
  letter-spacing: 0.1em;
`

const firstRowIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const secondRowIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50%{
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const SloganFirstRow = styled.span`
  animation: ${firstRowIn} linear 1000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`

const SloganSecondRow = styled.span`
  animation: ${secondRowIn} linear 2000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`

export {
  MainBackgroundImage,
  InnerWrap,
  Inner,
  DashBoard,
  SloganFirstRow,
  SloganSecondRow,
}
