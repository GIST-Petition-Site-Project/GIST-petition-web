import { useState, ChangeEvent, FormEvent } from 'react'
import {
  ButtonGroup,
  Select,
  Stack,
  Flex,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import { SubmitButton, BackButton } from './styles'
import { postCreatePost } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'

const PostEditor = () => {
  const [postInfo, setPostInfo] = useState<PostsInput>({
    title: '',
    category: '기숙사',
    description: '',
  })

  const { title, description, category } = postInfo

  // Register와 Login 페이지와 이름을 통일 시키기 위해
  // onContentChange 에서 handleChange로 이름을 변경합니다.
  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target
    setPostInfo({ ...postInfo, [name]: value })
    console.log(postInfo)
  }

  // const history = useHistory()
  // const goBack = (path: string) => {
  //   history.push(path)
  // }
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (postInfo.title.length > 10) {
      try {
        const postsStatus = await postCreatePost(postInfo)
        if (postsStatus < 400) {
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <Flex gap="10px" justifyContent="center" flexDirection="column">
        <form className="posts__form" onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel>제목</FormLabel>
              <InputGroup borderColor="#ccc">
                <Input
                  placeholder="제목을 작성해 주세요. (10자 이상)"
                  onChange={handleChange}
                  name="title"
                  value={title}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>카테고리</FormLabel>
              <Select
                defaultValue="기숙사"
                focusBorderColor="none"
                onChange={handleChange}
                border="1px solid"
                borderColor="#ccc"
                borderRadius="0"
                name="category"
                value={category}
              >
                <option selected disabled>
                  카테고리를 선택해주세요.
                </option>
                <option value="기숙사">기숙사</option>
                <option value="시설운영">시설운영</option>
                <option value="진로/취업">진로/취업</option>
                <option value="학적/교과/장학">학적/교과/장학</option>
                <option value="학생지원/행사/동아리">
                  학생지원/행사/동아리
                </option>
                <option value="기획/예산/홍보">기획/예산/홍보</option>
                <option value="대외협력">대외협력</option>
                <option value="권익소통">권익소통</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel> 청원내용</FormLabel>
              <Textarea
                placeholder="내용을 작성해 주세요."
                onChange={handleChange}
                name="description"
                value={description}
                height={'50vh'}
                mb="20px"
                resize="none"
              />
            </FormControl>

            <ButtonGroup justifyContent="space-around">
              <BackButton>작성 취소</BackButton>
              <SubmitButton type="submit" className="submit__btn">
                작성 완료
              </SubmitButton>
            </ButtonGroup>
          </Stack>
        </form>
      </Flex>
    </>
  )
}

export default PostEditor
