import { Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'

const CommentItem = styled.li`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  margin-top: -1px;
  text-align: left;
`
const CommentAnonymousName = styled.div`
  font-weight: bold;
`

function CommentList() {
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
