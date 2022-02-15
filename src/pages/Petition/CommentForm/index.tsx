import { Flex, FormControl, useDisclosure } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { getStateOfAgreement, postAgreePetition } from '../../../utils/api'
import { CommentTextArea, CommentWriteButton } from './styles'
import { useNavigate } from 'react-router-dom'
import NeedLoginModal from '../../../components/NeedLoginModal'

const CommentForm = ({ petitionId }: PetitionId): JSX.Element => {
  const [input, setInput] = useState<AgreePetition>({
    description: '청원에 동의합니다.',
  })
  const [isConsented, setIsConsented] = useState<boolean>(false)
  // Register와 Login 페이지와 이름을 통일 시키기 위해
  // onContentChange 에서 handleChange로 이름을 변경합니다.
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ description: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const status = await postAgreePetition(petitionId, input)
      if (status === 401) {
        onOpen()
        console.log('로그인 해야함')
      }
      if (status < 400) {
        console.log(status)
        navigate(0)
        setIsConsented(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const checkAgreeByMe = async (id: string) => {
      const getStateAgree = await getStateOfAgreement(id)
      if (getStateAgree[0] < 400) {
        setIsConsented(getStateAgree[1])
      }
    }
    checkAgreeByMe(petitionId)
  }, [])
  const { isOpen, onOpen, onClose } = useDisclosure()

  postAgreePetition
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Flex h="60px">
            <CommentTextArea
              placeholder="청원에 동의합니다."
              rows={1}
              _focus={{ outline: 'none' }}
              onChange={handleChange}
            >
              청원에 동의합니다.
            </CommentTextArea>
            <CommentWriteButton
              _focus={{ outline: 'none' }}
              disabled={isConsented}
              type="submit"
              colorScheme={'none'}
            >
              {!isConsented ? '동의하기' : '동의완료'}
            </CommentWriteButton>
          </Flex>
        </FormControl>
      </form>
      <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
    </>
  )
}

export default CommentForm
