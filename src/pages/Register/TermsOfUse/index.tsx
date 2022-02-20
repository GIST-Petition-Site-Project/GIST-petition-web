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
  TermsOfUseBox,
} from './styles'

interface ITermsOfUse {
  onAgree: (value: string) => void
  agreeInfo: RegisterAgree
}

const TermsOfUse = ({ onAgree, agreeInfo }: ITermsOfUse): JSX.Element => {
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
    <TermsOfUseBox>
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            onClick={handleClick}
            aria-label="Call Segun"
            icon={<CheckIcon />}
            data-value="total"
            isclicked={agreeInfo.private && agreeInfo.service}
          />
          <TermsOfUseTotalBox>전체 약관 동의</TermsOfUseTotalBox>
        </TermsOfUseCheckFlex>
      </List>
      <Divider orientation="horizontal" borderBottomWidth="2.5px" />
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="service"
            isclicked={agreeInfo.service}
          />
          <TermsOfUseBox>서비스 이용약관 동의</TermsOfUseBox>
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
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="private"
            isclicked={agreeInfo.private}
          />
          <TermsOfUseBox>개인정보수집 및 이용동의</TermsOfUseBox>
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
      <TermsOfUseCollapse in={secondOpen}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        at, quia officiis nesciunt quod blanditiis aperiam repellendus
        praesentium numquam ullam maxime, vel consequuntur est dolore tempore
        excepturi rerum ipsa perspiciatis?
      </TermsOfUseCollapse>
    </TermsOfUseBox>
  )
}

export default TermsOfUse
