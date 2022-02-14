import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Radio,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  TermsOfUseCollapse,
  TermsOfUseCheckIcon,
  TermsOfUseIcon,
  List,
  TermsOfUseBtn,
  TermsOfUseCheckFlex,
  TermsOfUseTotalBox,
} from './styles'

const TermsOfUse = ({ onAgree, agreeInfo }): JSX.Element => {
  const [firstOpen, setFirstOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const handleClick = (e: any) => {
    const target = e.target
    console.log(target.parentNode.parentNode.parentNode)
    const value =
      target.dataset.value ||
      target.parentNode.dataset.value ||
      target.parentNode.parentNode.dataset.value ||
      target.parentNode.parentNode.parentNode.dataset.value
    value && onAgree(value)
  }
  return (
    <section>
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            onClick={handleClick}
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            data-value="total"
            isclicked={agreeInfo.private && agreeInfo.service}
          />
          <TermsOfUseTotalBox ml={2}>전체 약관 동의</TermsOfUseTotalBox>
        </TermsOfUseCheckFlex>
      </List>
      <Divider orientation="horizontal" borderBottomWidth="2.5px" mb={4} />
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="service"
            isclicked={agreeInfo.service}
          />
          <Box ml={2}>서비스 이용약관 동의</Box>
        </TermsOfUseCheckFlex>
        <TermsOfUseBtn
          onClick={() => {
            if (secondOpen === true) {
              setSecondOpen(!secondOpen)
            }
            setFirstOpen(!firstOpen)
          }}
        >
          <TermsOfUseIcon></TermsOfUseIcon>
        </TermsOfUseBtn>
      </List>
      <Divider orientation="horizontal" />
      <TermsOfUseCollapse in={firstOpen}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        at, quia officiis nesciunt quod blanditiis aperiam repellendus
        praesentium numquam ullam maxime, vel consequuntur est dolore tempore
        excepturi rerum ipsa perspiciatis?
      </TermsOfUseCollapse>
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            size="sm"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="private"
            isclicked={agreeInfo.private}
          />
          <Box ml={2}>개인정보수집 및 이용동의</Box>
        </TermsOfUseCheckFlex>
        <TermsOfUseBtn
          onClick={() => {
            if (firstOpen === true) {
              setSecondOpen(!firstOpen)
            }
            setSecondOpen(!secondOpen)
          }}
        >
          <TermsOfUseIcon></TermsOfUseIcon>
        </TermsOfUseBtn>
      </List>
      <Divider orientation="horizontal" />
      <TermsOfUseCollapse in={secondOpen}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        at, quia officiis nesciunt quod blanditiis aperiam repellendus
        praesentium numquam ullam maxime, vel consequuntur est dolore tempore
        excepturi rerum ipsa perspiciatis?
      </TermsOfUseCollapse>
    </section>
  )
}

export default TermsOfUse
