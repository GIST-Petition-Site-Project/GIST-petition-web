import styled from '@emotion/styled'
import { Button, Textarea } from '@chakra-ui/react'

const SAgreementForm = styled.div`
  position: relative;
  > span {
    display: inline-block;
    position: absolute;
    right: 0;
    top: -1.5rem;
    color: #8a8a8a;
    font-weight: 300;
  }

  .wrapper {
    display: flex;
    height: 60px;
    textarea {
      border-radius: 0;
      border: 1px solid #ccc;
      font-size: 0.875rem;
      resize: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.6rem;

      :focus {
        outline: none;
      }
    }
    .agreement_btn {
      height: 100%;
      min-width: 80px;
      border-radius: 0;
      background-color: #131618;
      color: #fff;
    }
    button:disabled,
    button[disabled] {
      background-color: #8a8a8a;
      cursor: not-allowed;
    }
  }
`

export { SAgreementForm }
