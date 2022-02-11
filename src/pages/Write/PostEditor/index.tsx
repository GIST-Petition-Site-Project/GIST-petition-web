import { useState, ChangeEvent, FormEvent } from 'react'
import {
  ButtonGroup,
  Stack,
  Flex,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react'
import {
  SubmitButton,
  BackButton,
  CategorySelect,
  DescriptionInputTextArea,
  CurrentLengthText,
} from './styles'
import { postCreatePetition } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../../types/enums'

const PostEditor = () => {
  const numberOfCategory =
    Object.keys(Category).filter(el => isNaN(Number(el))).length - 1

  const catergoryIdx = Array(numberOfCategory)
    .fill(0)
    .map((_x, i) => i + 1)

  const [petitionInput, setPetitionInput] = useState<PetitionsInput>({
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
      setPetitionInput({ ...petitionInput, [name]: Number(value) })
      return
    }
    setPetitionInput({
      ...petitionInput,
      [name]: value.replace(/ +/g, ' '),
    })
    console.log(petitionInput.description.length)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await postCreatePetition(petitionInput)
      if (response) {
        const url = response?.headers?.location
        navigate(url)
      }
    } catch (error) {
      console.log(error)
      if (petitionInput.title === ' ' || petitionInput.description === ' ') {
        alert('제목 또는 내용을 추가해주세요')
      }
    }
  }

  return (
    <Flex gap="10px" justifyContent="center" flexDirection="column">
      <form className="petitions__form" onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl isRequired>
            <Flex justifyContent="space-between">
              <FormLabel>제목</FormLabel>
              <CurrentLengthText>
                {petitionInput.title.length}/100
              </CurrentLengthText>
            </Flex>
            <InputGroup borderColor="#ccc">
              <Input
                placeholder="제목을 작성해 주세요."
                onChange={handleChange}
                name="title"
                borderRadius="0"
                focusBorderColor="none"
                value={petitionInput.title}
                maxLength="100"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>카테고리</FormLabel>
            <CategorySelect
              focusBorderColor="none"
              onChange={handleChange}
              name="categoryId"
              value={petitionInput.categoryId}
            >
              <option selected disabled>
                카테고리를 선택해주세요.
              </option>
              {catergoryIdx.map(idx => (
                <option value={idx} key={idx}>
                  {Category[idx]}
                </option>
              ))}
            </CategorySelect>
          </FormControl>

          <FormControl isRequired>
            <Flex justifyContent="space-between">
              <FormLabel> 청원내용</FormLabel>
              <CurrentLengthText>
                {petitionInput.description.length}/10000
              </CurrentLengthText>
            </Flex>
            <DescriptionInputTextArea
              placeholder="내용을 작성해 주세요."
              onChange={handleChange}
              name="description"
              value={petitionInput.description}
              focusBorderColor="none"
              maxLength="10000"
            />
          </FormControl>

          <ButtonGroup justifyContent="space-around">
            <BackButton
              type="button"
              onClick={() => {
                navigate(-1)
              }}
            >
              작성 취소
            </BackButton>
            <SubmitButton type="submit" className="submit__btn">
              작성 완료
            </SubmitButton>
          </ButtonGroup>
        </Stack>
      </form>
    </Flex>
  )
}

export default PostEditor
