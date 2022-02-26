import styled from '@emotion/styled'

const Container = styled.div``
const PetitionBoard = styled.div`
  position: relative;
  margin-top: 6rem;

  .petition_type {
    display: flex;
    border-bottom: 2px solid #ccc;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export { Container, PetitionBoard }
