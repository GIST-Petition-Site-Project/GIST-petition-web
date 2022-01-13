import { Stack } from '@chakra-ui/react'
import { CommentItem, CommentAnonymousName } from './styles'

const CommentList = (): JSX.Element => {
  return (
    <ul>
      <CommentItem>
        <Stack>
          <CommentAnonymousName>익명1</CommentAnonymousName>
          <div>res.content[0]</div>
        </Stack>
      </CommentItem>
      <CommentItem>
        <Stack>
          <CommentAnonymousName>익명1</CommentAnonymousName>
          <div>res.content[1]</div>
        </Stack>
      </CommentItem>
      <CommentItem>
        <Stack>
          <CommentAnonymousName>익명1</CommentAnonymousName>
          <div>res.content[2]</div>
        </Stack>
      </CommentItem>
      <CommentItem>
        <Stack>
          <CommentAnonymousName>익명1</CommentAnonymousName>
          <div>res.content[3]</div>
        </Stack>
      </CommentItem>
    </ul>
  )
}
export default CommentList
