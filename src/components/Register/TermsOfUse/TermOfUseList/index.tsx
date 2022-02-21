import { CheckIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import {
  AccordionBtn,
  List,
  TermsOfUseBox,
  TermsOfUseCheckFlex,
  TermsOfUseCheckIcon,
  TermsOfUseIcon,
  TermsOfUseTotalBox,
} from './styles'

const TermOfUseList = ({ onClick, whichBox, onAccordion }: TermOfUseList) => {
  const agreeInfo = useSelector((state: RootState) => state.register.agreeInfo)
  return (
    <List>
      <TermsOfUseCheckFlex as="label">
        <TermsOfUseCheckIcon
          onClick={onClick}
          aria-label="Call Segun"
          icon={<CheckIcon />}
          data-value="total"
          isclicked={agreeInfo.private && agreeInfo.service ? 'true' : 'false'}
        />
        {whichBox === 'total' ? (
          <TermsOfUseTotalBox>전체 약관 동의</TermsOfUseTotalBox>
        ) : whichBox === 'private' ? (
          <TermsOfUseBox>개인정보수집 및 이용동의</TermsOfUseBox>
        ) : (
          <TermsOfUseBox>서비스 이용약관 동의</TermsOfUseBox>
        )}
      </TermsOfUseCheckFlex>
      {onAccordion && (
        <AccordionBtn onClick={onAccordion}>
          <TermsOfUseIcon></TermsOfUseIcon>
        </AccordionBtn>
      )}
    </List>
  )
}

export default TermOfUseList
