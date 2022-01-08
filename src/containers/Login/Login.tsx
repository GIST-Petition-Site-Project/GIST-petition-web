import React, { FormEvent, useState } from 'react'
// import { useDispatch } from 'react-redux'
import { User } from '../../app/userSlice'
import {
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { stackStyle, LoginButton, ErrorText } from './style'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { checkLoginError } from '../../utils/checkUser'
import { postLogin } from '../../utils/api/postLogin'

const Login = (): JSX.Element => {
  // chakra icon
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const [user, setUser] = useState<User>({ username: '', password: '' })

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postLogin(user.username, user.password)
  }
  return (
    <div className="login">
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
                placeholder="이메일을 입력하세요."
                value={user.username}
                onChange={handleChangeUser}
              />
            </InputGroup>
          </FormControl>
          <ErrorText>아이디가 존재하지 않습니다.</ErrorText>
          <FormControl>
            <Text mb="8px">비밀번호</Text>
            <InputGroup borderColor="#ccc">
              <InputLeftElement pointerEvents="none">
                {<CFaLock color="gray.300" />}
              </InputLeftElement>
              <Input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요."
                value={user.password}
                onChange={handleChangeUser}
              />
            </InputGroup>
          </FormControl>
          <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
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
    </div>
  )
}

export default Login
