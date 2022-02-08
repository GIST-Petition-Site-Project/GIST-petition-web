import styled from '@emotion/styled'
import theme from '../../style/theme'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.innerMaxWidth};
  height: 100%;
`

const PetitionWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  position: relative;
  top: 150px;
`

const PetitionView = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 35px;
  text-align: center;
`

export { Inner, PetitionWrapper, PetitionView }
