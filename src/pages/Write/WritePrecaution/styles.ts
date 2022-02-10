import { Box, Container } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StylePrecaution = styled(Box)`
  /* padding: 20px; */
`
const StyleStrong = styled.span`
  font-weight: bold;
`

const PrincipleContents = styled(Container)`
  line-height: 1.5rem;
  max-width: 100%;
  text-align: justify;
`

export { StylePrecaution, StyleStrong, PrincipleContents }
