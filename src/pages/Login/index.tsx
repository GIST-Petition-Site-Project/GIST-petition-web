import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/auth/authSlice'
import {
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { stackStyle, LoginButton, ErrorText } from './styles'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { checkLoginError } from '../../utils/checkUser'
import { postLogin } from '../../utils/api'

const Login = (): JSX.Element => {
  // chakra icon
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const [input, setInput] = useState<User>({ username: '', password: '' })
  const [responseState, setResponseState] = useState(0)

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkUpperCase = (e: any) => {
    const text = String.fromCharCode(e.which)
    if (
      text.toUpperCase() === text &&
      text.toLowerCase() !== text &&
      !e.shiftKey
    ) {
      setResponseState(600)
      setTimeout(() => {
        setResponseState(0)
      }, 1000)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const loginStatus = await postLogin(input)
      setResponseState(loginStatus)

      if (loginStatus < 400) {
        navigate(-1)
        dispatch(setLogin())
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <Stack spacing={4} style={stackStyle}>
        <Text fontSize="4xl" fontWeight="bold">
          로그인
        </Text>
        <FormControl isRequired>
          <Text mb="8px">이메일</Text>
          <InputGroup borderColor="#ccc">
            <InputLeftElement pointerEvents="none">
              {<CFaUserAlt color="gray.300" />}
            </InputLeftElement>
            <Input
              type="email"
              name="username"
              id="username"
              placeholder="이메일을 입력하세요."
              value={input.username}
              onChange={handleChangeUser}
              borderRadius="0"
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <Text mb="8px">비밀번호</Text>
          <InputGroup borderColor="#ccc">
            <InputLeftElement pointerEvents="none">
              {<CFaLock color="gray.300" />}
            </InputLeftElement>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              value={input.password}
              onChange={handleChangeUser}
              borderRadius="0"
              onKeyPress={checkUpperCase}
            />
          </InputGroup>
        </FormControl>
        <ErrorText>{checkLoginError(responseState)}</ErrorText>
        <Text mb="4px" align="right" decoration="underline">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </Text>

        <LoginButton type="submit" className="submit__btn">
          로그인
        </LoginButton>

        <Text mb="4px" align="center">
          계정이 없으신가요?{' '}
          <a href="/register" style={{ textDecoration: 'underline' }}>
            계정 만들기
          </a>
        </Text>
      </Stack>
    </form>
  )
}

export default Login
