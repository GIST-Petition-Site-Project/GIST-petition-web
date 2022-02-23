import styled from '@emotion/styled'
import theme from '../../style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 2rem;
    }
  }
`
const PetitionWrapper = styled.div`
  border: 1px solid #ccc;
  position: relative;
  margin: 150px 0 50px 0;
  padding: 30px 10px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 50px 30px;
  }
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
        svg {
          margin: auto;

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
      li:nth-of-type(1) {
        a {
          color: #3b1e1e;
          background-color: #f9e000;
        }
      }
      li:nth-of-type(2) {
        a {
          color: #ffffff;
          background-color: #4267b2;
        }
      }
    }
  }
`

export { Container, PetitionWrapper, SharingPetition }
