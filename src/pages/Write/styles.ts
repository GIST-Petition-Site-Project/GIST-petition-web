import styled from '@emotion/styled'
// import theme from '../../style/theme'
import { Box } from '@chakra-ui/react'

const Container = styled.div`
  .inner > .chakra-stack {
    position: relative;
    margin: 9.375rem 0;
  }
`
const WriteWrapper = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 0;
`

export { Container, WriteWrapper }
