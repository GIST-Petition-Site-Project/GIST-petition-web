import styled from '@emotion/styled'

const Container = styled.div``

const PetitionBoard = styled.div`
  position: relative;
  margin-top: 9.375rem;
  text-align: center;
  .petition_type {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 2px solid #333;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .chakra-select {
    width: 128px;
    height: 40px;
    border-radius: 0;
    border-color: #ccc;
  }
`

export { Container, PetitionBoard }
