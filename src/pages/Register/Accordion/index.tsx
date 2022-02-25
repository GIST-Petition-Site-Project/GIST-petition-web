import { CheckIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Box,
  Divider,
} from '@chakra-ui/react'
import { memo } from 'react'
import { AccordionBtn, BtnContainer, Item, TermsOfUseCheckIcon } from './styles'

const TermsOfUseAccordion = memo(
  ({ agreeInfo, onClick }: RegisterTermsOfUseBtn) => {
    return (
      <Accordion allowToggle>
        <Item>
          <BtnContainer>
            <TermsOfUseCheckIcon
              onClick={onClick}
              aria-label="Call Segun"
              icon={<CheckIcon />}
              data-value="service"
              isclicked={agreeInfo.service ? 'true' : 'false'}
            />
            <AccordionBtn>
              <Box flex="1" textAlign="left">
                서비스 이용약관
              </Box>
              <AccordionIcon />
            </AccordionBtn>
          </BtnContainer>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </Item>
        <Divider orientation="horizontal" />
        <Item>
          <BtnContainer>
            <TermsOfUseCheckIcon
              onClick={onClick}
              aria-label="Call Segun"
              icon={<CheckIcon />}
              data-value="private"
              isclicked={agreeInfo.private ? 'true' : 'false'}
            />
            <AccordionBtn>
              <Box flex="1" textAlign="left">
                개인정보 이용동의
              </Box>
              <AccordionIcon />
            </AccordionBtn>
          </BtnContainer>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </Item>
      </Accordion>
    )
  },
)

export default TermsOfUseAccordion
