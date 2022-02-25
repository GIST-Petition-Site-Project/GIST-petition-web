import { CheckIcon } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import { memo } from 'react'
import {
  List,
  TermsOfUseCheckFlex,
  TermsOfUseCheckIcon,
  TermsOfUseTotalBox,
} from './styles'

const TermOfUseList = memo(({ agreeInfo, onClick }: RegisterTermsOfUseBtn) => {
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
        <TermsOfUseTotalBox>전체 약관 동의</TermsOfUseTotalBox>
      </TermsOfUseCheckFlex>
      <Divider orientation="horizontal" borderBottomWidth="2.5px" />
    </List>
  )
})

export default TermOfUseList
