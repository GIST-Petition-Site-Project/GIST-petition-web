import styled from '@emotion/styled'
import { Select, Text } from '@chakra-ui/react'

const PetitionsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const PetitionsText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`
const PetitionsHead = styled.div`
  height: 50px;
  width: 100%;
  border-top: 2px solid #333;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  align-items: center;
`
const PetitionsHeadWrap = styled.div`
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
const PetitionsSelect = styled(Select)`
  width: 128px;
  height: 40px;
  border-radius: 0;
  border-color: #ccc;
`
const PetitionItem = styled.li`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #f8f8f8;
  }
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
`

const PetitionCategory = styled.div`
  position: absolute;
  text-indent: 10px;
`
const PetitionSubject = styled.div`
  position: absolute;
  left: 220px;
  :hover {
    text-decoration: underline;
  }
`
const PetitionDate = styled.div`
  position: absolute;
  right: 90px;
  width: 130px;
`
const PetitionAgreement = styled.div`
  width: 90px;
  position: absolute;
  right: 0;
  color: #df3127;
  font-weight: bold;
`
export {
  PetitionsSelect,
  PetitionsText,
  PetitionsTitle,
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
