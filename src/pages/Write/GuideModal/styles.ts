import { Button, ModalContent } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '@style/theme'

const ViewWriteMethodButton = styled(Button)`
  background-color: #2f363c;
  color: white;
  border-radius: 2px;
`

const CancleButton = styled(Button)`
  background-color: #5a5e5d;
  border-radius: 2px;
  margin-right: 5px;
`
const GuideModalContent = styled(ModalContent)`
  border-radius: 0;
  margin: auto 2rem;
  .chakra-modal__header {
    margin: 10px 0;
    padding: 8px 24px 10px 24px;
    font-size: 20px;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      margin: 15px;
      padding: 16px 24px;
      font-size: 24px;
    }
  }
  .chakra-modal__body {
    text-align: justify;
    margin: 0px;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      margin: 0 15px;
    }

    > ul {
      padding: 0px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        padding: 0 12px;
      }
      .modal-font {
        font-size: 14px;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          font-size: 16px;
        }
      }
      > li {
        margin-bottom: 0px;
        .chakra-container {
          margin: 5px;
          line-height: 160%;
          padding-left: 0px;
          padding-right: 10px;
          @media screen and (min-width: ${theme.breakpoints.md}) {
            margin: 15px;
            padding-right: 20px;
          }
        }
      }
    }
  }
  > footer {
    padding: 0 8px 8px 0px;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 24px 16px 24px;
    }
    > button {
      font-size: 14px;
      padding: 4px 10px;
      height: auto;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: inherit;
        padding: 8px 16px;
      }
    }
  }
`
export { ViewWriteMethodButton, CancleButton, GuideModalContent }
