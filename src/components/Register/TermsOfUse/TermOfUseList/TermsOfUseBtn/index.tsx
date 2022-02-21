import { AccordionBtn, TermsOfUseIcon } from './styles'

const TermsOfUseBtn = ({ onAccordion }: any) => {
  return (
    <AccordionBtn onClick={onAccordion}>
      <TermsOfUseIcon></TermsOfUseIcon>
    </AccordionBtn>
  )
}
export default TermsOfUseBtn
