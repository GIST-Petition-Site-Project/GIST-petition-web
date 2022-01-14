import { Flex, FormControl } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { postCreateComment } from '../../../utils/api'
import { CommentTextArea, CommentWriteButton } from './styles'
import { useNavigate } from 'react-router-dom'

const CommentForm = ({ postId }: PostId): JSX.Element => {
  const [input, setInput] = useState<CommentInput>({
    content: '',
  })

  // Register와 Login 페이지와 이름을 통일 시키기 위해
  // onContentChange 에서 handleChange로 이름을 변경합니다.
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ content: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const status = await postCreateComment(postId, input)
      if (status === 401) {
        /**모달 예시
         * 댓글을 작성하시려면 로그인을 해야 합니다.
         * 로그인 하시겠습니까?
         * 예...........아니요
         */
        console.log('로그인 해야함')
      }
      if (status < 400) {
        console.log(status)
        navigate(0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  postCreateComment
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Flex h="60px">
            <CommentTextArea
              placeholder="의견을 남겨주세요"
              rows={1}
              _focus={{ outline: 'none' }}
              onChange={handleChange}
            ></CommentTextArea>
            <CommentWriteButton type="submit">등록</CommentWriteButton>
          </Flex>
        </FormControl>
      </form>
    </>
  )
}

export default CommentForm
