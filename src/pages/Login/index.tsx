import { FormEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setLogin } from '@redux/auth/authSlice'
import {
  Button,
  chakra,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'

import { FaUserAlt, FaLock } from 'react-icons/fa'
import { postLogin } from '@api/userAPI'
import { useAppDispatch, useAppSelect } from '../../redux/store.hooks'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { stackStyle } from '@pages/FindingPassword/styles'
import { ErrorText } from '@pages/Register/styles'

const Login = (): JSX.Element => {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const checkLoginError = (status: number): string => {
    if (status < 400) return ''
    else if (status == 600) return 'CapsLock이 켜져 있습니다.'
    return '이메일 혹은 비밀번호를 확인해주세요'
  }

  const [input, setInput] = useState<User>({ username: '', password: '' })
  const [responseState, setResponseState] = useState<number>(0)

  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const handleShowClick = () => setViewPassword(!viewPassword)

  const email = useRef<HTMLInputElement>(null)
  const pwd = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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
        // navigate(-1)
        dispatch(setLogin())
      }
    } catch (error) {
      console.log(error)
    }
  }
  const auth = useAppSelect(select => select.auth.isAuthorized)
  useEffect(() => {
    if (auth) {
      window.history.back()
    }
  }, [useAppSelect(select => select.auth.isAuthorized)])

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
              // value={input.username}
              // onChange={handleChangeUser}
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
              // value={input.password}
              // onChange={handleChangeUser}
              borderRadius="0"
              onKeyPress={checkUpperCase}
            />
          </InputGroup>
        </FormControl>
        <ErrorText>{checkLoginError(responseState)}</ErrorText>
        <Text mb="4px" align="right" decoration="underline">
          <a href="/findpassword">비밀번호를 잊으셨나요?</a>
        </Text>

        <Button
          type="submit"
          className="login_btn"
          onClick={() => {
            setInput({
              username: email.current ? email.current.value : '',
              password: pwd.current ? pwd.current.value : '',
            })
          }}
        >
          로그인
        </Button>

        <span className="create_acount account_link">
          계정이 없으신가요? <Link to="/register">계정 만들기</Link>
        </span>
      </Stack>
    </form>
  )
}

export default Login
