import React, { FormEvent, useState } from 'react'
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
} from '@chakra-ui/react'
import theme from '../../style/theme'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { RegisterButton, stackStyle, ErrorText } from './styles'
import { useNavigate } from 'react-router-dom'

const Register = (): JSX.Element => {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })

  const [whichUI, setWhichUI] = useState<WhichUI>({
    isCodeRequested: false,
    isLoading: false,
    isVerificated: false,
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
    setWhichUI({ ...whichUI, isLoading: true })

    const status = await postCreateVerificationCode({
      username: input.username,
    })
    setErrorText(status[1])
    if (status[0] < 400) {
      setWhichUI({ ...whichUI, isLoading: false, isCodeRequested: true })
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleConfirmCode = async () => {
    const status = await postConfirmVerificationCode({
      username: input.username,
      verificationCode: input.verificationCode,
    })
    setErrorText(status[1])
    if (status[0] < 400) {
      setWhichUI({ ...whichUI, isVerificated: true })
    }
  }

  const navigate = useNavigate()
  const handleRegister = async () => {
    console.log('SUBMIT')
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
      if (status[0] < 400) {
        navigate('/login')
      }
      setErrorText(status[1])
    } else {
      setErrorText('비밀번호를 정확하게 입력해주세요')
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <Stack spacing={4} style={stackStyle}>
          <Text fontSize="4xl" fontWeight="bold">
            회원가입
          </Text>
          <FormControl isRequired>
            <Text mb="8px">이메일</Text>
            <InputGroup borderColor={`${theme.color.ligthGray}`}>
              <InputLeftElement>
                {<CFaUserAlt color="gray.300" />}
              </InputLeftElement>
              <Input
                type="email"
                name="username"
                placeholder="지스트 메일을 입력하세요"
                value={input.username}
                onChange={handleChange}
                disabled={whichUI.isCodeRequested}
              ></Input>
            </InputGroup>
          </FormControl>
          {whichUI.isCodeRequested && (
            <FormControl isRequired>
              <Text mb="8px">인증 코드</Text>
              <InputGroup borderColor={`${theme.color.ligthGray}`}>
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  type="text"
                  name="verificationCode"
                  placeholder="이메일로 온 인증 코드를 입력하세요"
                  value={input.verificationCode}
                  onChange={handleChange}
                  disabled={whichUI.isVerificated}
                  style={{ textTransform: 'uppercase' }}
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
                  type="password"
                  name="password"
                  placeholder="영문과 숫자를 포함한 8자리 이상의 비밀번호를 입력하세요"
                  value={input.password}
                  onChange={handleChange}
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
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {!whichUI.isCodeRequested && !whichUI.isLoading && (
            <RegisterButton onClick={handleCreateCode}>
              인증 코드 전송
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

          {whichUI.isCodeRequested && !whichUI.isVerificated && (
            <RegisterButton onClick={handleConfirmCode}>인증</RegisterButton>
          )}
          {whichUI.isVerificated && (
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
