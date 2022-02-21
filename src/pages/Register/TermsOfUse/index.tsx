import { CheckIcon } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TermOfUseList from '../../../components/Register/TermsOfUse/TermOfUseList'
import { setAgree } from '../../../redux/register/registerSlice'
import { RootState } from '../../../redux/store'
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

const TermsOfUse = memo((): JSX.Element => {
  const [firstOpen, setFirstOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const agreeInfo = useSelector((state: RootState) => state.register.agreeInfo)
  const dispatch = useDispatch()

  const handleAgree = (value: string) => {
    switch (value) {
      case 'total':
        if (agreeInfo.private && agreeInfo.service) {
          dispatch(setAgree('Total'))
          return
        } else if (agreeInfo.private || agreeInfo.service) {
          !agreeInfo.service && dispatch(setAgree('Service'))
          !agreeInfo.private && dispatch(setAgree('Private'))
          return
        }
        dispatch(setAgree('Total'))
        return
      case 'service':
        dispatch(setAgree('Service'))
        return
      case 'private':
        dispatch(setAgree('Private'))
        return
      default:
        throw Error('Clicked Wrong Btn')
    }
  }

  const handleClick = (e: any) => {
    const target = e.currentTarget
    const value = target.dataset.value
    value && handleAgree(value)
  }
  return (
    <TermsOfUseBox>
      <TermOfUseList onClick={handleClick} whichBox="total"></TermOfUseList>
      <Divider orientation="horizontal" borderBottomWidth="2.5px" />
      <List>
        <TermsOfUseCheckFlex as="label">
          <TermsOfUseCheckIcon
            aria-label="Call Segun"
            icon={<CheckIcon />}
            onClick={handleClick}
            data-value="service"
            isclicked={agreeInfo.service ? 'true' : 'false'}
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
            isclicked={agreeInfo.private ? 'true' : 'false'}
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
})

export default TermsOfUse
