import { CheckIcon } from '@chakra-ui/icons'
import { List } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import {
  TermsOfUseBox,
  TermsOfUseCheckFlex,
  TermsOfUseCheckIcon,
  TermsOfUseTotalBox,
} from './styles'

interface TermOfUseList {
  onClick: any
  whichBox: string
}

const TermOfUseList = ({ onClick, whichBox }: TermOfUseList) => {
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
    </List>
  )
}

export default TermOfUseList
