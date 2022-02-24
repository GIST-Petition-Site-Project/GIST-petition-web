import React, { FormEvent, useRef, useState } from 'react'
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
import theme from '@style/theme'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { RegisterButton, stackStyle, ErrorText } from './styles'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@redux/store'
import {
  postConfirmVerificationCodeForPassword,
  postCreateVerificationCodeForPassword,
  putResetPassword,
} from '@api/verificationAPI'
import { setFindPasswordWhichInfo } from '@redux/findPassword/findPasswordSlice'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'

const FindingPassword = (): JSX.Element => {
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
  const whichUI = useAppSelect((state: RootState) => state.findPassword)
  const dispatch = useAppDispatch()
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

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

  const handleCreateCode = async () => {
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText('지스트 메일을 이용해주세요')
      return
    }
    dispatch(setFindPasswordWhichInfo('Loading'))
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    setErrorText(message)
    if (status > 400) {
      setInput({ ...input, username: '' })
      emailRef.current && emailRef.current.focus()
      dispatch(setFindPasswordWhichInfo('Loading'))
    } else if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Loading'))
      dispatch(setFindPasswordWhichInfo('CodeRequested'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleConfirmCode = async () => {
    const response = await postConfirmVerificationCodeForPassword({
      username: input.username,
      verificationCode: input.verificationCode,
    })
    console.log(response)
    const status = response?.status
    const message = response?.data.message
    if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Verificated'))
      dispatch(setFindPasswordWhichInfo('Valid'))
      return
    }
    switch (message) {
      case '존재하지 않는 인증 정보입니다.': {
        setInput({ ...input, verificationCode: '' })
        verificationRef.current && verificationRef.current.focus()
        break
      }
      case '만료된 인증 코드입니다.': {
        setInput({ ...input, verificationCode: '' })
        dispatch(setFindPasswordWhichInfo('Expired'))
        break
      }
      case undefined: {
        throw Error('API 호출에 실패했습니다')
      }
    }
    setErrorText(message)
  }

  const handleResendCode = async () => {
    dispatch(setFindPasswordWhichInfo('Loading'))
    setErrorText('')
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response.status
    if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Expired'))
      dispatch(setFindPasswordWhichInfo('Loading'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleReset = async () => {
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.password)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
      return
    }
    if (input.password === input.passwordConfirm) {
      const response = await putResetPassword({
        password: input.password,
        username: input.username,
        verificationCode: input.verificationCode,
      })
      const status = response.status
      const message = response.data.message
      setErrorText(message)

      if (status < 400) {
        toast({
          status: 'success',
          duration: 3000,
          description: '비밀번호 재설정',
          title: '비밀번호가 재설정되었습니다',
          isClosable: true,
        })
        navigate('/login')
      } else {
        dispatch(setFindPasswordWhichInfo('Valid'))
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
    dispatch(setFindPasswordWhichInfo('Verificated'))
    dispatch(setFindPasswordWhichInfo('CodeRequested'))
  }

  return (
    <section className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <Stack spacing={4} style={stackStyle}>
          <Text fontSize="4xl" fontWeight="bold">
            비밀번호 찾기
          </Text>
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
          {!whichUI.isCodeRequested &&
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
            <RegisterButton onClick={handleReset} className="submit__btn">
              비밀번호 재설정
            </RegisterButton>
          )}
          <ErrorText>{errorText}</ErrorText>
        </Stack>
      </form>
    </section>
  )
}

export default FindingPassword
