import styled from '@emotion/styled'
import theme from '../../style/theme'
import MainImg from '../../assets/img/gist_summer.jpg'
import { keyframes } from '@emotion/react'

const MainBackgroundImage = styled.div`
  position: relative;
  background-image: url(${MainImg});
  height: 60vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media screen and (min-width:${theme.breakpoints.md}){
    height:80vh;
  });
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`

const DashBoard = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 4rem;
  display: flex;
  flex-direction:column;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${theme.color.WHITE};
  letter-spacing: 0.1em;
  opacity: 100%;
  @media screen and (max-width:${theme.breakpoints.lg}){
    font-size:2.2rem;
  });
  @media screen and (max-width:${theme.breakpoints.md}){
    position: static;
    font-size:1.8rem;
    flex-direction:flex-end;
  })

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
  margin: 0.5em 0;
  animation: ${firstRowIn} linear 1000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`

const SloganSecondRow = styled.span`
  animation: ${secondRowIn} linear 2000ms forwards;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`

export {
  MainBackgroundImage,
  Inner,
  DashBoard,
  SloganFirstRow,
  SloganSecondRow,
}
