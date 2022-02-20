import styled from '@emotion/styled'
import theme from '../../style/theme'

const StyledInner = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  padding: 0 ${theme.space.INNER_PADDING};
`

export { StyledInner }
