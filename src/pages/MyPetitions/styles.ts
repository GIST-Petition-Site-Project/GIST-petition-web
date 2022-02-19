import styled from '@emotion/styled'
import { Box, Select, Text } from '@chakra-ui/react'

const PetitionBoard = styled.div`
  position: relative;
  top: 9.375rem;
  text-align: center;
`
const PetitionsTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid #333;
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
  height: 40px;
  margin-bottom: 1px;
`

export { PetitionBoard, PetitionsTitle, PetitionsSelect, PetitionsText }
