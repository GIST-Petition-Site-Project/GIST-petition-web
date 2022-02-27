import styled from '@emotion/styled'
import { Button, Text } from '@chakra-ui/react'
import theme from '@style/theme'

const PetitionProgress = styled.div`
  font-size: 1.25rem;
  text-align: center;
`

const PetitionTitleWrap = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`

const PetitionTitle = styled(Text)`
  margin: 0 1.25em;
`

const CurrentAgreementsText = styled.div`
  text-align: center;
  font-size: 1.25em;
`

const CurrentAgreements = styled.span`
  display: inline;
  color: #df3127;
  font-weight: bold;
`

const PetitionDescription = styled.div`
  line-height: 30px;
  text-align: justify;
`

const AgreementButton = styled(Button)`
  width: 7.5rem;
  height: 2.5rem;
  border-radius: 0;
  border: 2px solid #df3127;
  color: #df3127;
`
const ContentWrap = styled.div`
  white-space: pre-line;
`

const SharingPetition = styled.div`
  .share-url {
    height: 2rem;
    margin: 1rem 0;
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
        line-height: 1.8rem;
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
          content: '복사';
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

export {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  AgreementButton,
  ContentWrap,
  SharingPetition,
}
