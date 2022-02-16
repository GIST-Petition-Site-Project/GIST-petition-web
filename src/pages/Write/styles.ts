import styled from '@emotion/styled'
import theme from '../../style/theme'
import { Box, Stack } from '@chakra-ui/react'

const Inner = styled.div`
  position: relative;
  max-width: ${theme.space.INNER_MAXWIDTH};
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
`

const WriteStack = styled(Stack)`
  position: relative;
  margin: 9.375rem 0;
`
const Wrapper = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 0;
`

const StyledBoxInner = styled(Box)``
const StyledPostEditor = styled(Box)``

export { Inner, Wrapper, WriteStack, StyledBoxInner, StyledPostEditor }
