import React from 'react'
import { YoutubeVideo, Container } from './styles'

interface Iprops {
  url: string
}

const Youtube = ({ url }: Iprops) => {
  return (
    <Container ratio={1.7} maxW="40rem">
      <YoutubeVideo
        src={`https://www.youtube.com/embed/${url}`}
        allowFullScreen
        frameBorder="0"
      ></YoutubeVideo>
    </Container>
  )
}
export default Youtube
