import styled from '@emotion/styled'
import theme from '../../style/theme'
import { Box, Select, Text, Tab, Tabs, TabList } from '@chakra-ui/react'
const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  height: 100%;
  padding: 0 2em;
`

const PetitionBoard = styled.div`
  position: relative;
  /* top: 9.375rem; */
  margin-top: 9.375rem;
  text-align: center;
`
const PetitionsTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`

const PetitionsSelect = styled(Select)`
  width: 100%;
  height: 40px;
  border-radius: 0;
  border-color: #ccc;
  top: 0;
  right: 0;
`

const PetitionsText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`

const SelectWrapper = styled.div`
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`
const PetitionsTab = styled(Tab)`
  border-top: 2px solid #333;
  border-left: 2px solid #333;
  font-weight: bold;
  :focus {
    outline: none;
    box-shadow: none;
  }
`
const PetitionsTabs = styled(Tabs)``
const PetitionsTabList = styled(TabList)`
  border-bottom: 0px;
`

export {
  Inner,
  PetitionBoard,
  PetitionsTitle,
  PetitionsSelect,
  PetitionsText,
  SelectWrapper,
  PetitionsTab,
  PetitionsTabs,
  PetitionsTabList,
}
