import styled from '@emotion/styled'
import { Button, Textarea } from '@chakra-ui/react'

const CommentTextArea = styled(Textarea)`
  border-radius: 0;
  border-color: #ccc;
  font-size: 0.875rem;
  resize: none;
  box-sizing: border-box;
  &:hover {
    border-color: #ccc;
  }
`

const CommentWriteButton = styled(Button)`
  height: 100%;
  border-radius: 0;
  background-color: #131618;
  color: #fff;
  &:hover {
    background-color: #131618;
  }
`

export { CommentTextArea, CommentWriteButton }
