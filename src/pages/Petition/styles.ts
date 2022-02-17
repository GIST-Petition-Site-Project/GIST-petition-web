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
      width: 89%;
      height: 100%;
      border: 1px solid #ccc;
      float: left;

      div:last-child {
      }
      div:first-of-type {
        width: 10rem;
        background-color: #ccc;
        float: left;
      }
      div {
        line-height: 2.8rem;
        text-align: center;
        height: 100%;
      }
    }

    .copy-btn {
      width: 10%;
      height: 100%;
      margin-left: 5px;
      float: right;
      button {
        width: 100%;
        height: 100%;
        background-color: #131618;
        color: white;
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
          display: block;
          border-radius: 100px;
          text-align: center;
          line-height: 3rem;
          font-size: 30px;
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
