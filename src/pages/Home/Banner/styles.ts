import styled from '@emotion/styled'
import theme from '@style/theme'
import MainImg from '@assets/img/main2.png'
import { keyframes } from '@emotion/react'

const firstRowIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const secondRowIn = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const BannerSection = styled.section`
  .banner_img {
    position: relative;
    background-image: url(${MainImg});
    height: 440px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    .box_filter {
      backdrop-filter: blur(1.5px);
      height: 100%;
    }
    .banner_dashboard {
      position: absolute;
      display: flex;
      margin: auto;
      height: 88px;
      flex-direction: column;
      font-weight: bold;
      color: ${theme.color.WHITE};
      line-height: 1.5em;
      letter-spacing: 0.1em;
      text-align: center;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      font-size: 1.5rem;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        text-align: left;
        bottom: 3rem;
        top: unset;
        left: 2rem;
        font-size: 1.8rem;
      }
      span:nth-of-type(1) {
        animation: ${firstRowIn} linear 1000ms forwards;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        span {
          color: #ff0000;
        }
      }
      span:nth-of-type(2) {
        animation: ${secondRowIn} linear 2000ms forwards;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
    }
  }
`

export { BannerSection }
