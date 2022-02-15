import React, { FormEvent, useRef, useState } from 'react'
import {
  postRegister,
  postConfirmVerificationCode,
  postCreateVerificationCode,
} from '../../utils/api'
import {
  chakra,
  FormControl,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Input,
  Spinner,
  Flex,
  useToast,
} from '@chakra-ui/react'
import theme from '../../style/theme'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { RegisterButton, stackStyle, ErrorText, DeleteBtn } from './styles'
import { useNavigate } from 'react-router-dom'
import { postDelete } from '../../utils/api/user/postDelete'
import TermsOfUse from './TermsOfUse'

const Register = (): JSX.Element => {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const verificationRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })
  const toast = useToast({
    variant: 'toast',
  })

  const [whichUI, setWhichUI] = useState<WhichUI>({
    isAgreed: false,
    isCodeRequested: false,
    isLoading: false,
    isExpired: false,
    isVerificated: false,
    isValid: false,
  })
  const [agreeInfo, setAgreeInfo] = useState<RegisterAgree>({
    service: false,
    private: false,
  })

  const [errorText, setErrorText] = useState('')

  const handleAgree = (value: string) => {
    switch (value) {
      case 'total':
        if (agreeInfo.private && agreeInfo.service) {
          setAgreeInfo({ ...agreeInfo, service: false, private: false })
          return
        }
        setAgreeInfo({ ...agreeInfo, service: true, private: true })
        return
      case 'service':
        if (agreeInfo.service) {
          setAgreeInfo({ ...agreeInfo, service: false })
          return
        }
        setAgreeInfo({ ...agreeInfo, service: true })
        return
      case 'private':
        if (agreeInfo.private) {
          setAgreeInfo({ ...agreeInfo, private: false })
          return
        }
        setAgreeInfo({ ...agreeInfo, private: true })
        return
      default:
        throw Error('Clicked Wrong Btn')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'verificationCode') {
      if (value.length > 6) {
        return
      }
      setInput({ ...input, [name]: value.toUpperCase() })
      return
    }
    setInput({ ...input, [name]: value })
  }

  const handleAgreeBtn = (e: React.MouseEvent<HTMLElement>) => {
    if (agreeInfo.private === true && agreeInfo.service === true) {
      setWhichUI({ ...whichUI, isAgreed: true })
      return
    }
    setErrorText('모든 약관에 동의해주세요')
  }

  const handleCreateCode = async () => {
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText('지스트 메일을 이용해주세요')
      return
    }
    setWhichUI({ ...whichUI, isLoading: true })
    const status = await postCreateVerificationCode({
      username: input.username,
    })
    setErrorText(status[1])
    if (status[1] === '이미 존재하는 회원입니다.') {
      setInput({ ...input, username: '' })
      emailRef.current && emailRef.current.focus()
      setWhichUI({ ...whichUI, isLoading: false })
    } else if (status[0] < 400) {
      setWhichUI({ ...whichUI, isLoading: false, isCodeRequested: true })
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleConfirmCode = async () => {
    const status = await postConfirmVerificationCode({
      username: input.username,
      verificationCode: input.verificationCode,
    })

    switch (status[1]) {
      case '존재하지 않는 인증 정보입니다.': {
        setInput({ ...input, verificationCode: '' })
        verificationRef.current && verificationRef.current.focus()
        break
      }
      case '만료된 인증 코드입니다.': {
        setInput({ ...input, verificationCode: '' })
        setWhichUI({ ...whichUI, isExpired: true })
        break
      }
    }
    setErrorText(status[1])
    if (status[0] < 400) {
      setWhichUI({ ...whichUI, isVerificated: true, isValid: true })
    }
  }

  const handleResendCode = async () => {
    setWhichUI({
      ...whichUI,
      isLoading: true,
    })
    setErrorText('')
    const status = await postCreateVerificationCode({
      username: input.username,
    })
    if (status[1] < 400) {
      setWhichUI({
        ...whichUI,
        isExpired: false,
        isLoading: false,
        isCodeRequested: true,
      })
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleRegister = async () => {
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.password)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
      return
    }
    if (input.password === input.passwordConfirm) {
      const status = await postRegister({
        username: input.username,
        verificationCode: input.verificationCode,
        password: input.password,
      })
      setErrorText(status[1])

      if (status[0] < 400) {
        toast({
          status: 'success',
          duration: 3000,
          description: '회원가입이 완료되었습니다',
          title: '계정 생성완료',
          isClosable: true,
        })
        navigate('/login')
      } else {
        setErrorText(status[1])
        setWhichUI({ ...whichUI, isValid: false })
      }
    } else {
      passwordRef.current && passwordRef.current.focus()
      setErrorText('비밀번호가 일치하지 않습니다')
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleReverify = () => {
    setInput({
      ...input,
      verificationCode: '',
      password: '',
      passwordConfirm: '',
    })
    setErrorText('')
    setWhichUI({ ...whichUI, isVerificated: false, isCodeRequested: false })
  }

  const handleDelete = async () => {
    const status = await postDelete({ username: input.username })
    if (status[0] < 400) {
      toast({
        status: 'success',
        duration: 2000,
        description: '계정 삭제완료',
        isClosable: true,
      })
    }
  }

  return (
    <section className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <Stack spacing={4} style={stackStyle}>
          <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
          <Text fontSize="4xl" fontWeight="bold">
            회원가입
          </Text>
          {!whichUI.isAgreed && (
            <TermsOfUse
              onAgree={handleAgree}
              agreeInfo={agreeInfo}
            ></TermsOfUse>
          )}

          {whichUI.isAgreed && (
            <FormControl isRequired>
              <Text mb="8px">이메일</Text>
              <InputGroup borderColor={`${theme.color.ligthGray}`}>
                <InputLeftElement>
                  {<CFaUserAlt color="gray.300" />}
                </InputLeftElement>
                <Input
                  ref={emailRef}
                  type="email"
                  name="username"
                  placeholder="지스트 메일을 입력하세요"
                  value={input.username}
                  onChange={handleChange}
                  disabled={whichUI.isCodeRequested}
                  borderRadius="0"
                ></Input>
              </InputGroup>
            </FormControl>
          )}

          {whichUI.isCodeRequested && !whichUI.isExpired && (
            <FormControl isRequired>
              <Text mb="8px">인증 코드</Text>
              <InputGroup borderColor={`${theme.color.ligthGray}`}>
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  ref={verificationRef}
                  type="text"
                  name="verificationCode"
                  placeholder="이메일로 온 인증 코드를 입력하세요"
                  value={input.verificationCode}
                  onChange={handleChange}
                  disabled={whichUI.isVerificated}
                  style={{ textTransform: 'uppercase' }}
                  borderRadius="0"
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {whichUI.isVerificated && (
            <FormControl isRequired>
              <Text mb="8px">비밀번호</Text>
              <InputGroup borderColor={`${theme.color.ligthGray}`}>
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="영문과 숫자를 포함한 8자리 이상의 비밀번호를 입력하세요"
                  value={input.password}
                  onChange={handleChange}
                  borderRadius="0"
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {whichUI.isVerificated && (
            <FormControl isRequired>
              <Text mb="8px">비밀번호 확인</Text>
              <InputGroup borderColor={`${theme.color.ligthGray}`}>
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="비밀번호를 재입력하세요"
                  value={input.passwordConfirm}
                  onChange={handleChange}
                  borderRadius="0"
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {!whichUI.isAgreed && (
            <RegisterButton onClick={handleAgreeBtn}>다음단계</RegisterButton>
          )}
          {whichUI.isAgreed &&
            !whichUI.isCodeRequested &&
            !whichUI.isLoading &&
            !whichUI.isExpired && (
              <RegisterButton onClick={handleCreateCode}>
                인증 코드 전송
              </RegisterButton>
            )}
          {whichUI.isExpired && (
            <RegisterButton onClick={handleResendCode}>
              인증코드 재전송
            </RegisterButton>
          )}

          {whichUI.isLoading && (
            <Flex flexDirection="column" alignItems="center">
              <Spinner
                m="auto"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#df3127"
                size="xl"
                mb="10px"
              />
              잠시만 기다려주세요...
            </Flex>
          )}

          {whichUI.isCodeRequested &&
            !whichUI.isVerificated &&
            !whichUI.isExpired && (
              <RegisterButton onClick={handleConfirmCode}>인증</RegisterButton>
            )}
          {!whichUI.isExpired && whichUI.isVerificated && !whichUI.isValid && (
            <RegisterButton onClick={handleReverify}>
              다시 인증하기
            </RegisterButton>
          )}
          {whichUI.isVerificated && whichUI.isValid && (
            <RegisterButton onClick={handleRegister} className="submit__btn">
              회원가입
            </RegisterButton>
          )}
          <ErrorText>{errorText}</ErrorText>
          <Text mb="4px" align="center">
            이미 가입하셨나요?{' '}
            <a href="/login" style={{ textDecoration: 'underline' }}>
              로그인
            </a>
          </Text>
        </Stack>
      </form>
    </section>
  )
}

export default Register
