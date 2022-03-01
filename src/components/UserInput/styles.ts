import styled from '@emotion/styled'

const SUserInput = styled.div`
  .page_type {
    display: inline-block;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  input {
    border-color: #ccc;
    border-radius: 0;
  }
  .chakra-button {
    :focus {
      box-shadow: none;
    }
  }
`

export { SUserInput }
