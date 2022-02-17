import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../style/theme'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  height: 100%;
  padding: 0 0.5em;
`

const PetitionWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  position: relative;
  margin: 150px 0 50px 0;
`

const PetitionView = styled(Box)`
  width: 100%;
  height: 100%;
  text-align: center;
`

const SharingPetition = styled.div`
  .share-url {
    height: 3rem;
    .url-box {
      width: 82%;
      height: 100%;
      border: 1px solid #ccc;
      float: left;

      overflow: hidden;
      word-break: break-all;

      div:last-child {
      }
      div:first-of-type {
        width: 10rem;
        background-color: #ccc;
        float: left;
        display: none;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          display: block;
        }
      }
      div {
        line-height: 2.8rem;
        text-align: center;
        height: 100%;
      }
    }

    .copy-btn {
      min-width: 16%;

      height: 100%;
      margin-left: 5px;
      float: right;
      button {
        width: 100%;
        height: 100%;
        background-color: #131618;
        color: white;
        i {
          color: #fff;
          font-size: 24px;
          @media screen and (min-width: ${theme.breakpoints.sm}) {
            display: none;
          }
        }
      }
      button::before {
        font-family: xeicon;
        content: '';
        color: white;
        @media screen and (min-width: ${theme.breakpoints.sm}) {
          content: 'URL 복사';
        }
      }
    }
  }
  .share-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    > div {
      font-weight: 600;
    }

    .sns {
      display: flex;
      width: 7rem;
      justify-content: space-around;
      margin-top: 1rem;
      li {
        a {
          width: 45px;
          height: 45px;
          border-radius: 100px;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      li:nth-child(1) {
        a {
          color: #3b1e1e;
          background-color: #f9e000;
        }
      }
      li:nth-child(2) {
        a {
          color: #ffffff;
          background-color: #4267b2;
        }
      }
    }
  }
`

export { Inner, PetitionWrapper, PetitionView, SharingPetition }
