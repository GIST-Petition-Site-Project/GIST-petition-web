import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useMemo,
  useCallback,
} from 'react'
import {
  ButtonGroup,
  Stack,
  InputGroup,
  Input,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { EditorSection } from './styles'
import { postCreatePetition } from '@api/petitionAPI'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../../types/enums'

const PostEditor = () => {
  const countCategoryIdx = useMemo(() => {
    const numberOfCategory =
      Object.keys(Category).filter(el => isNaN(Number(el))).length - 1

    const catergoryIdx = Array(numberOfCategory)
      .fill(0)
      .map((_x, i) => i + 1)

    return catergoryIdx
  }, [])

  const [petitionInput, setPetitionInput] = useState<PetitionsInput>({
    title: '',
    categoryId: 1,
    description: '',
  })

  const handleChange = useCallback(
    (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLSelectElement>
        | ChangeEvent<HTMLTextAreaElement>,
    ) => {
      const { value, name } = e.target
      if (name === 'categoryId') {
        setPetitionInput({ ...petitionInput, [name]: Number(value) })
        return
      }
      setPetitionInput({
        ...petitionInput,
        [name]: value,
      })
    },
    [petitionInput],
  )

  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const response = await postCreatePetition(petitionInput)
        const url = response?.headers?.location.slice(3) || '/petitions'
        navigate(url)
      } catch (error) {
        console.log(error)
        if (petitionInput.title === ' ' || petitionInput.description === ' ') {
          alert('제목 또는 내용을 추가해주세요')
        }
      }
    },
    [petitionInput],
  )

  return (
    <EditorSection>
      <form className="petitions__form" onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl className="subject_form contents" isRequired>
            <div>
              <FormLabel>제목</FormLabel>
              <span>{petitionInput.title.length}/100</span>
            </div>
            <InputGroup borderColor="#ccc">
              <Input
                placeholder="제목을 작성해 주세요."
                onChange={handleChange}
                name="title"
                focusBorderColor="none"
                value={petitionInput.title}
                maxLength={100}
              />
            </InputGroup>
          </FormControl>

          <FormControl className="category_form" isRequired>
            <FormLabel>카테고리</FormLabel>
            <Select
              focusBorderColor="none"
              onChange={handleChange}
              name="categoryId"
              value={petitionInput.categoryId}
            >
              <option disabled>카테고리를 선택해주세요.</option>
              {countCategoryIdx.map(idx => (
                <option value={idx} key={idx}>
                  {Category[idx]}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl className="description_form contents" isRequired>
            <div>
              <FormLabel> 청원내용</FormLabel>
              <span>{petitionInput.description.length}/10000</span>
            </div>
            <Textarea
              placeholder="내용을 작성해 주세요."
              onChange={handleChange}
              name="description"
              value={petitionInput.description}
              focusBorderColor="none"
              maxLength={10000}
            />
          </FormControl>

          <ButtonGroup>
            <button
              className="cancle_btn"
              type="button"
              onClick={() => {
                navigate(-1)
              }}
            >
              작성 취소
            </button>
            <button className="submit_btn" type="submit">
              작성 완료
            </button>
          </ButtonGroup>
        </Stack>
      </form>
    </EditorSection>
  )
}

export default React.memo(PostEditor)
