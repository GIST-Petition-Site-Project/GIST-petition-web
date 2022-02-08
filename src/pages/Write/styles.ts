import styled from '@emotion/styled'
import { Box, Stack } from '@chakra-ui/react'
const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`

const WriteStack = styled(Stack)`
  position: absolute;
  top: 150px;
  bottom: 20px;
  width: 100%;
`
const Wrapper = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 0;
  padding: 10px;
  letter-spacing: wide;
`

const StyledBoxInner = styled.div`
  margin: 30px;
`
const StyledPostEditor = styled.div`
  margin: 60px 30px;
`

export { Inner, Wrapper, WriteStack, StyledBoxInner, StyledPostEditor }
