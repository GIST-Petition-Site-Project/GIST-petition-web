import React, { useEffect, useState } from 'react'
import { YoutubeVideo, Container, ErrorText } from './styles'

interface Iprops {
  url: string
}

const regex =
  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

const Youtube = ({ url }: Iprops) => {
  const [onError, setOnError] = useState(false)
  const [videoId, setVideoId] = useState('')
  useEffect(() => {
    validateURL(url)
  }, [url])

  const validateURL = (url: string) => {
    const result = regex.test(url)
    console.log(result)
    if (!result) {
      setOnError(true)
    } else {
      setOnError(false)
      setVideoId(url.match(regex)![1])
    }
  }

  return (
    <section>
      {!onError ? (
        <Container ratio={1.7} maxW="40rem">
          <YoutubeVideo
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            frameBorder="0"
          ></YoutubeVideo>
        </Container>
      ) : (
        <ErrorText>url주소가 올바르지 않습니다</ErrorText>
      )}
    </section>
  )
}
export default Youtube
