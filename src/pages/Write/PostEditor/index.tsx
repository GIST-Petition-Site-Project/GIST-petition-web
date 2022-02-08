import { useState, ChangeEvent, FormEvent } from 'react'
import {
  ButtonGroup,
  Stack,
  Flex,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import {
  SubmitButton,
  BackButton,
  CategorySelect,
  DescriptionInputTextArea,
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
    setPetitionInput({ ...petitionInput, [name]: value })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (petitionInput.title.length > 10) {
      try {
        console.log(petitionInput)
        const petitionsStatus = await postCreatePetition(petitionInput)
        if (petitionsStatus < 400) {
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
        <form className="petitions__form" onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel>제목</FormLabel>
              <InputGroup borderColor="#ccc">
                <Input
                  placeholder="제목을 작성해 주세요. (10자 이상)"
                  onChange={handleChange}
                  name="title"
                  borderRadius="0"
                  focusBorderColor="none"
                  value={petitionInput.title}
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
              <FormLabel> 청원내용</FormLabel>
              <DescriptionInputTextArea
                placeholder="내용을 작성해 주세요."
                onChange={handleChange}
                name="description"
                value={petitionInput.description}
                focusBorderColor="none"
              />
            </FormControl>

            <ButtonGroup justifyContent="space-around">
              <BackButton
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
    </>
  )
}

export default PostEditor
