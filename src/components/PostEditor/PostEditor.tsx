import React, { useState } from 'react'
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
import { SubmitButton, BackButton } from './style'

const PostEditor = () => {
  const [postInfo, setPostInfo] = useState({
    title: '',
    description: '',
    category: '기숙사',
  })

  const { title, description, category } = postInfo

  const onContentChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target
    setPostInfo({ ...postInfo, [name]: value })
    console.log(postInfo)
  }

  function checkTitle(title: string) {
    const value = title.length
    if (value > 10) {
      return false
    } else return true
  }
  // const history = useHistory()
  // const goBack = (path: string) => {
  //   history.push(path)
  // }

  return (
    <>
      <Flex gap="10px" justifyContent="center" flexDirection="column">
        <Stack spacing={6}>
          <FormControl isRequired>
            <FormLabel>제목</FormLabel>
            <InputGroup borderColor="#ccc">
              <Input
                placeholder="제목을 작성해 주세요. (10자 이상)"
                onChange={onContentChange}
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
              onChange={onContentChange}
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
              <option value="학생지원/행사/동아리">학생지원/행사/동아리</option>
              <option value="기획/예산/홍보">기획/예산/홍보</option>
              <option value="대외협력">대외협력</option>
              <option value="권익소통">권익소통</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel> 청원내용</FormLabel>
            <Textarea
              placeholder="내용을 작성해 주세요."
              onChange={onContentChange}
              name="description"
              value={description}
              height={'50vh'}
              mb="20px"
              resize="none"
            />
          </FormControl>

          <ButtonGroup justifyContent="space-around">
            <BackButton>작성 취소</BackButton>
            <SubmitButton
              onClick={() => {
                if (checkTitle(title)) {
                  alert('제목 길이가 너무 짧습니다. 10자 이상 입력해주세요.')
                }
              }}
            >
              작성 완료
            </SubmitButton>
          </ButtonGroup>
        </Stack>
      </Flex>
    </>
  )
}

export default PostEditor
