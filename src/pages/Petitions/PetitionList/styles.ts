import { Box, ListItem } from '@chakra-ui/react'
import styled from '@emotion/styled'

const PetitionsHead = styled(Box)`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  /* display: flex; */
  align-items: center;
`
const PetitionsHeadWrap = styled(Box)`
  position: relative;
  width: 100%;
`

const PetitionsCategory = styled.div`
  position: absolute;
  top: 0;
  width: 150px;
`
const PetitionsSubject = styled.div`
  margin-left: 220px;
  margin-right: 250px;
`
const PetitionsDate = styled.div`
  position: absolute;
  top: 0;
  right: 90px;
  width: 130px;
  text-align: center;
`
const PetitionsAgreement = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  text-align: center;
`

const PetitionCategory = styled(Box)`
  position: absolute;
  color: #1197d4;
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
  font-weight: bold;
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

export {
  PetitionsHead,
  PetitionsHeadWrap,
  PetitionsCategory,
  PetitionsSubject,
  PetitionsDate,
  PetitionsAgreement,
  PetitionItem,
  PetitionCategory,
  PetitionSubject,
  PetitionDate,
  PetitionAgreement,
}
