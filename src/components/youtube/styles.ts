import styled from '@emotion/styled'
import { AspectRatio } from '@chakra-ui/react'
import theme from '@style/theme'

const Container = styled(AspectRatio)`
  margin: auto;
  margin-bottom: 2em;
`

const YoutubeVideo = styled.iframe`
  margin: auto;
`

const ErrorText = styled.p`
  text-align: center;
  color: ${theme.color.PRIMARY_RED};
`

export { YoutubeVideo, Container, ErrorText }
