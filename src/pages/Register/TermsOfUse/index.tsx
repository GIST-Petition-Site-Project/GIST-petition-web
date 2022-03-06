import { memo } from 'react'
import TermsOfUseAccordion from './Accordion'
import TermOfUseList from './TermOfUseList'
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
