import { Stack } from '@chakra-ui/react'
import { CommentItem, CommentAnonymousName } from './styles'
import { getComments } from '../../../utils/api/comment/getComments'
import { useEffect, useState } from 'react'

const CommentList = ({ postId }: PostId): JSX.Element => {
  const [response, setResponse] = useState<Array<CommentResponse>>([])

  useEffect(() => {
    const getAllComment = async () => {
      try {
        const status = await getComments(postId)
        if (status[0] < 400) {
          setResponse(status[1])
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllComment()
  }, [])

  return (
    <ul>
      {response.map(res => (
        <CommentItem>
          <Stack>
            <CommentAnonymousName>{res.userId}</CommentAnonymousName>
            <div>{res.content}</div>
          </Stack>
        </CommentItem>
      ))}
    </ul>
  )
}
export default CommentList
