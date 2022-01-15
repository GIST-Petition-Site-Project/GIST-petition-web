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
const CommentCreatedAt = styled.div`
  font-size: 12px;
  color: #555;
`
const ContentWrap = styled.div`
  white-space: pre-line;
`

export { CommentItem, CommentAnonymousName, CommentCreatedAt, ContentWrap }
