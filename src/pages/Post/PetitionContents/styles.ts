import styled from '@emotion/styled'
import { Button, Text } from '@chakra-ui/react'

const PetitionProgress = styled.div`
  font-size: 1.25rem;
`

const PetitionTitleWrap = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`

const PetitionTitle = styled(Text)`
  margin: 0 1.25em;
`

const CurrentAgreementsText = styled.div`
  text-align: center;
  font-size: 1.25em;
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
  width: 7.5rem;
  height: 2.5rem;
  border-radius: 0;
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
