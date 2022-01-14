import styled from '@emotion/styled'
import { Button, Text } from '@chakra-ui/react'

const PetitionProgress = styled.div`
  font-size: 20px;
`

const PetitionTitleWrap = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

const PetitionTitle = styled(Text)`
  margin: 0 20px;
`

const CurrentAgreementsText = styled.div`
  text-align: center;
  font-size: 20px;
`

const CurrentAgreements = styled(Text)`
  display: inline;
  color: #df3127;
  font-weight: bold;
`

const PetitionDescription = styled.div`
  line-height: 30px;
  text-align: justify;
`

const AgreementButton = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 2px;
  border: 2px solid #df3127;
  color: #df3127;
`
export {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  AgreementButton,
}
