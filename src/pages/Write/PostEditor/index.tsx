import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
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
import { Category } from '../../../types/enums'

const PostEditor = () => {
  const numberOfCategory =
    Object.keys(Category).filter(el => isNaN(Number(el))).length - 1

  const catergoryIdx = Array(numberOfCategory)
    .fill(0)
    .map((_x, i) => i + 1)

  const [postInput, setPostInput] = useState<PostsInput>({
    title: '',
    categoryId: 1,
    description: '',
  })

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target
    if (name === 'categoryId') {
      setPostInput({ ...postInput, [name]: Number(value) })
      return
    }
    setPostInput({ ...postInput, [name]: value })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (postInput.title.length > 10) {
      try {
        console.log(postInput)
        const postsStatus = await postCreatePost(postInput)
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
                  borderRadius="0"
                  _focus={{ outline: 'none' }}
                  value={postInput.title}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>카테고리</FormLabel>
              <Select
                focusBorderColor="none"
                onChange={handleChange}
                border="1px solid"
                borderColor="#ccc"
                borderRadius="0"
                name="categoryId"
                value={postInput.categoryId}
              >
                <option selected disabled>
                  카테고리를 선택해주세요.
                </option>
                {catergoryIdx.map(idx => (
                  <option value={idx} key={idx}>
                    {Category[idx]}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel> 청원내용</FormLabel>
              <Textarea
                placeholder="내용을 작성해 주세요."
                onChange={handleChange}
                name="description"
                value={postInput.description}
                height={'50vh'}
                mb="20px"
                borderRadius="0"
                borderColor="#ccc"
                _focus={{ outline: 'none' }}
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
