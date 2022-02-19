import styled from '@emotion/styled'

import theme from '../../style/theme'
import { Box, Select, Text, Tab, Tabs, TabList } from '@chakra-ui/react'
const Container = styled.div``

const PetitionBoard = styled.div`
  position: relative;
  margin-top: 9.375rem;
  text-align: center;
`
const PetitionsTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`

const PetitionsSelect = styled(Select)`
  height: 40px;
  border-radius: 0;
  border-color: #ccc;
  font-size: 0.95rem;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`

const PetitionsText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  .petition_type {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 2px solid #333;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .chakra-select {
    width: 128px;
    height: 40px;
    border-radius: 0;
    border-color: #ccc;
  }
`
const TabtitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 20px;
    /* margin-top: 0px; */
  }
`

const TabtitleWrapper = styled.div`
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const PetitionsTab = styled(Tab)`
  font-size: 15px;
  font-weight: bold;
  :focus {
    outline: none;
    box-shadow: none;
  }
  padding: 7px;
  border-color: #ccc;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 8px 16px;
    font-size: 18px;
  }
`
const PetitionsTabs = styled(Tabs)``
const PetitionsTabList = styled(TabList)`
  border-bottom: 0px;
  font-size: 12px;
`

export {
  PetitionBoard,
  PetitionsTitle,
  PetitionsSelect,
  PetitionsText,
  TabtitleWrapper,
  TabtitleText,
  PetitionsTab,
  PetitionsTabs,
  PetitionsTabList,
}
export { Container }
