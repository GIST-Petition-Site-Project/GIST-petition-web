import styled from '@emotion/styled'

const CommentList = styled.div`
  li {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1em 0.2em;
    margin-top: -1px;
    text-align: left;
    .comment {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .anonymous {
        font-size: 14px;
        font-weight: 600;
        color: #8a8a8a;
      }
      .content {
        margin-top: 8px;
        white-space: pre-line;
      }
    }
  }
`

export { CommentList }
