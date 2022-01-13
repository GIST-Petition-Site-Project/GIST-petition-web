import { Flex, FormControl } from '@chakra-ui/react'
import { CommentTextArea, CommentWriteButton } from './styles'

const CommentForm = (): JSX.Element => {
  return (
    <>
      <FormControl>
        <Flex h="60px">
          <CommentTextArea
            placeholder="의견을 남겨주세요"
            rows={1}
            _focus={{ outline: 'none' }}
          ></CommentTextArea>
          <CommentWriteButton>등록</CommentWriteButton>
        </Flex>
      </FormControl>
    </>
  )
}

export default CommentForm
