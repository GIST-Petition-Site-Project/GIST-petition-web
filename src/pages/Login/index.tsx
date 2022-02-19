import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/auth/authSlice'
import {
  Button,
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Container } from './styles'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { checkLoginError } from '../../utils/checkUser'
import { postLogin } from '../../utils/api'

const Login = (): JSX.Element => {
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
    <Container>
      <form className="login_form" onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <span>로그인</span>
          <FormControl isRequired>
            <span>이메일</span>
            <InputGroup>
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
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <span>비밀번호</span>
            <InputGroup>
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
                onKeyPress={checkUpperCase}
              />
            </InputGroup>
          </FormControl>
          <span className="err_msg">{checkLoginError(responseState)}</span>
          <span className="forgot_pwd account_link">
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </span>

          <Button type="submit" className="login_btn">
            로그인
          </Button>

          <span className="create_acount account_link">
            계정이 없으신가요? <Link to="/register">계정 만들기</Link>
          </span>
        </Stack>
      </form>
    </Container>
  )
}

export default Login
