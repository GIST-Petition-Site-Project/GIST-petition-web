import styled from '@emotion/styled'
import theme from '../../style/theme'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.innerMaxWidth};
  height: 100%;
`

const PetitionBoard = styled.div`
  position: relative;
  top: 9.375rem;
  text-align: center;
`

export { Inner, PetitionBoard }
