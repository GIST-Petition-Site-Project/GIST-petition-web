import styled from '@emotion/styled'
import theme from '../../style/theme'
import { Select, Text } from '@chakra-ui/react'
const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.innerMaxWidth};
  height: 100%;
`

const PetitionBoard = styled.div`
  position: relative;
  top: 9.375rem;
  text-align: center;
`
const PetitionsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

const PetitionsSelect = styled(Select)`
  width: 128px;
  height: 40px;
  border-radius: 0;
  border-color: #ccc;
`
const PetitionsText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`

export { Inner, PetitionBoard, PetitionsTitle, PetitionsSelect, PetitionsText }
