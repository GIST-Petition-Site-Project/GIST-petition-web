import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setLogin } from '@redux/auth/authSlice'
import {
  chakra,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { Container } from './styles'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { postLogin } from '@api/userAPI'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

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

  const dispatch = useAppDispatch()
  const auth = useAppSelect(select => select.auth.isAuthorized)
  const navigate = useNavigate()
  const { hash } = useLocation()

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

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const loginStatus = await postLogin(input)
        setResponseState(loginStatus)
        if (loginStatus < 400) {
          dispatch(setLogin())
          if (location.hash) {
            navigate(
              { pathname: location.hash.replace('#', '') },
              { replace: true },
            )
          } else {
            navigate('/')
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    [input],
  )

  useEffect(() => {
    if (auth) {
      if (location.hash) {
        navigate(location.hash.replace('#', ''), { replace: true })
      } else {
        navigate('/')
      }
    }
  }, [hash])

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
                ref={email}
                type="email"
                name="username"
                id="uesrname"
                placeholder="지스트 이메일을 입력하세요"
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
                ref={pwd}
                type={viewPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                onKeyPress={checkUpperCase}
              />
              <InputRightElement>
                <IconButton
                  color="gray.300"
                  aria-label="view password"
                  variant="password"
                  icon={viewPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleShowClick}
                ></IconButton>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <span className="err_msg">{checkLoginError(responseState)}</span>
          <span className="forgot_pwd account_link">
            <Link to="/findpassword">비밀번호를 잊으셨나요?</Link>
          </span>

          <button
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
          </button>

          <span className="create_account account_link">
            계정이 없으신가요?{' '}
            <a
              onClick={_e => {
                navigate(
                  { pathname: '/register', hash: location.hash },
                  { replace: true },
                )
              }}
            >
              회원가입
            </a>
          </span>
        </Stack>
      </form>
    </Container>
  )
}

export default Login
