import { Select, Textarea } from '@chakra-ui/react'
import styled from '@emotion/styled'

const SubmitButton = styled.button`
  color: white;
  background-color: #d52425;
  border-radius: 2px;
  height: 36px;
  font-weight: bold;
  width: 33.3333333%;
`
const BackButton = styled.button`
  color: white;
  background-color: #5a5e5d;
  border-radius: 2px;
  height: 36px;
  font-weight: bold;
  width: 33.3333333%;
`
const CategorySelect = styled(Select)`
  border: 1px solid #ccc;
  border-radius: 0;
`
const DescriptionInputTextArea = styled(Textarea)`
  height: 50vh;
  margin-bottom: 20px;
  border-radius: 0;
  border-color: #ccc;
  resize: none;
`

export { SubmitButton, BackButton, CategorySelect, DescriptionInputTextArea }
