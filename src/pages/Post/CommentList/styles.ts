import styled from '@emotion/styled'

const CommentItem = styled.li`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1em 0;
  margin-top: -1px;
  text-align: left;
`
const CommentAnonymousName = styled.div`
  font-weight: bold;
`
const CommentCreatedAt = styled.div`
  font-size: 0.75rem;
  color: #555;
`

export { CommentItem, CommentAnonymousName, CommentCreatedAt }
