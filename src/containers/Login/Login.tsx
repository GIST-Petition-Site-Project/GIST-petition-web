import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserAsync, User } from '../../app/slices/user/userSlice'
import {
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import styled from '@emotion/styled'

const LoginButton = styled.button`
  color: white;
  background-color: #df3127;
  border-radius: 5px;
  height: 36px;
  font-weight: bold;
`
const Login = (): JSX.Element => {
  // chakra icon
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)
  const [user, setUser] = useState<User>({ email: '', password: '' })

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target)
    const { type, value } = e.target
    setUser({ ...user, [type]: value })
  }
  const dispatch = useDispatch()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addUserAsync(user))
  }
  return (
    <div className="login">
      <form className="login__form" onSubmit={e => handleSubmit(e)}>
        <Stack
          spacing={4}
          style={{
            position: 'absolute',
            top: '300px',
            left: '0',
            right: '0',
            height: '360px',
            width: '400px',
            margin: 'auto',
          }}
        >
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
                placeholder="이메일을 입력하세요."
                value={user.email}
                onChange={e => handleChangeUser(e)}
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
                placeholder="비밀번호를 입력하세요."
                value={user.password}
                onChange={e => handleChangeUser(e)}
              />
            </InputGroup>
          </FormControl>
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
