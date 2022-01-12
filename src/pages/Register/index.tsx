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
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { RegisterButton, stackStyle } from './styles'

const Register = (): JSX.Element => {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })
  const [isCodeRequested, setIsCodeRequested] = useState(false)
  const [verificationStatus, setVerficationStatus] = useState(500)
  const [registerStatus, setRegisterStatus] = useState(500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleCreateCode = async () => {
    const status = await postCreateVerificationCode({
      username: input.username,
    })
    if (status < 400) {
      setIsCodeRequested(true)
    }
  }

  const handleConfirmCode = async () => {
    const status = await postConfirmVerificationCode({
      username: input.username,
      verificationCode: input.verificationCode,
    })
    setVerficationStatus(status)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const status = await postRegister(input)
  }

  return (
    <section className="register">
      <form onSubmit={e => handleSubmit(e)} className="register__form">
        <Stack spacing={4} style={stackStyle}>
          <Text fontSize="4xl" fontWeight="bold">
            회원가입
          </Text>
          <FormControl isRequired>
            <Text mb="8px">이메일</Text>
            <InputGroup borderColor="#ccc">
              <InputLeftElement>
                {<CFaUserAlt color="gray.300" />}
              </InputLeftElement>
              <Input
                type="email"
                name="username"
                placeholder="gm.gist 혹은 gist 메일을 입력하세요"
                value={input.username}
                onChange={handleChange}
              ></Input>
            </InputGroup>
          </FormControl>
          {verificationStatus < 400 && (
            <FormControl isRequired>
              <Text mb="8px">비밀번호</Text>
              <InputGroup borderColor="#ccc">
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  type="password"
                  name="password"
                  placeholder="영문과 숫자를 포함하여 8자리 이상의 비밀번호를 입력하세요"
                  value={input.password}
                  onChange={handleChange}
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {verificationStatus < 400 && (
            <FormControl isRequired>
              <Text mb="8px">비밀번호확인</Text>
              <InputGroup borderColor="#ccc">
                <InputLeftElement>
                  {<CFaLock color="gray.300" />}
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="비밀번호를 재 입력하세요"
                  value={input.passwordConfirm}
                  onChange={handleChange}
                ></Input>
              </InputGroup>
            </FormControl>
          )}
          {!isCodeRequested && (
            <button onClick={handleCreateCode}>인증 번호 전송</button>
          )}
          {isCodeRequested && <button onClick={handleConfirmCode}>인증</button>}
          {verificationStatus < 400 && (
            <RegisterButton type="submit" className="submit__btn">
              회원가입
            </RegisterButton>
          )}
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
