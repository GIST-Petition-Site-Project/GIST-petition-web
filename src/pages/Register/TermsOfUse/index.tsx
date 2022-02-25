import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TermsOfUseAccordion from '../Accordion'
import TermOfUseList from './TermOfUseList'
import { setAgree } from '@redux/register/registerSlice'
import { RootState } from '@redux/store'
import { TermsOfUseBox } from './styles'

interface TermsOfUse {
  agreeInfo: {
    private: boolean
    service: boolean
  }
  onAgree: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TermsOfUse = memo(({ onAgree, agreeInfo }: TermsOfUse) => {
  return (
    <TermsOfUseBox>
      <TermOfUseList agreeInfo={agreeInfo} onClick={onAgree}></TermOfUseList>
      <TermsOfUseAccordion
        agreeInfo={agreeInfo}
        onClick={onAgree}
      ></TermsOfUseAccordion>
    </TermsOfUseBox>
  )
})

export default TermsOfUse
