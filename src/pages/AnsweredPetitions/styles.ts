import styled from '@emotion/styled'
import theme from '../../style/theme'
import { Box, Select, Text } from '@chakra-ui/react'
const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  height: 100%;
  padding: 0 2em;
`

const PetitionBoard = styled.div`
  position: relative;
  margin-top: 9.375rem;
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

export { Inner, PetitionBoard, PetitionsTitle, PetitionsSelect, PetitionsText }
