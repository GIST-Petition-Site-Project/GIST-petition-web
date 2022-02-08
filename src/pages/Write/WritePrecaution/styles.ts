import { Container } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StylePrecaution = styled.div`
  margin: 30px;
  padding: 20px;
`
const StyleStrong = styled.span`
  opacity: 1;
  font-weight: 900;
`

const PrincipleContents = styled(Container)`
  margin: 0;
  line-height: 160%;
  max-width: 85ch;
  text-align: justify;
`

export { StylePrecaution, StyleStrong, PrincipleContents }
