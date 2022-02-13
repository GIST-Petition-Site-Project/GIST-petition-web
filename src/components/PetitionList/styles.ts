import { Box, ListItem, Tag } from '@chakra-ui/react'
import theme from '../../style/theme'
import styled from '@emotion/styled'

const PetitionsHead = styled(Box)`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  align-items: center;
`
const PetitionsHeadWrap = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
`
const PetitionsStatus = styled.div`
  /* position: absolute; */
  display: flex;
  /* top: 0; */
  width: 100px;
  padding-left: 10px;
`

const PetitionsCategory = styled.div`
  /* position: absolute; */
  display: flex;
  /* top: 0; */
  width: 100px;
`
const PetitionsSubject = styled.div`
  margin-left: 220px;
  margin-right: 220px;
  display: flex;
`
const PetitionsDate = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 90px;
  width: 80px;
  text-align: center;
`
const PetitionsAgreement = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  text-align: center;
`
const PetitionStatus = styled(Box)`
  position: absolute;
  height: 100%;
  /* justify-content: center; */
  /* text-align: center; */
  display: flex;
  align-items: center;
  bottom: 0%;
  padding-left: 5px;
`
const PetitionCategory = styled(Box)`
  position: absolute;
  color: #1197d4;
  width: 120px;
  text-align: left;
  display: flex;
  align-items: center;
  bottom: 0%;
`
const PetitionSubject = styled(Box)`
  text-align: left;
  display: block;
  word-break: break-all;
  :hover {
    text-decoration: underline;
  }
`
const PetitionDate = styled(Box)`
  position: absolute;
  color: #8a8a8a;
  font-weight: 300;
`

const PetitionAgreement = styled(Box)`
  position: absolute;
  right: 0;
  color: #df3127;
`

const PetitionItem = styled(ListItem)`
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #f8f8f8;
  }
  display: block;
`
const PetitionStatusTag = styled(Tag)`
  font-size: 12px;
  background-color: ${theme.color.QUATERNARY_GRAY};
  color: white;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 12px;
  }
`
export {
  PetitionsHead,
  PetitionsHeadWrap,
  PetitionsStatus,
  PetitionsCategory,
  PetitionsSubject,
  PetitionsDate,
  PetitionsAgreement,
  PetitionItem,
  PetitionStatus,
  PetitionCategory,
  PetitionSubject,
  PetitionDate,
  PetitionAgreement,
  PetitionStatusTag,
}
