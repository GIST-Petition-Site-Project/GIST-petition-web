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

export { CommentItem, CommentAnonymousName }