import React, { FormEvent, useState } from 'react'
// import { useDispatch } from 'react-redux'
import { User } from '../../app/userSlice'
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
import styled from '@emotion/styled'

const RegisterButton = styled.button`
  color: white;
  background-color: #5a5e5d;
  border-radius: 5px;
  height: 36px;
  font-weight: bold;
`

const Register = (): JSX.Element => {
  const CFaUserAlt = chakra(FaUserAlt)
  const CFaLock = chakra(FaLock)

  const [user, setUser] = useState<User>({ username: '', password: '' })
  const [passwordCheck, setPasswordCheck] = useState('')

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  // const dispatch = useDispatch()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const emailRegex = /@(gm.)?gist.ac.kr$/
    // const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    // if (!emailRegex.test(email)) {
    //   alert('이메일 주소를 확인해주세요')
    // } else if (!passwordRegex.test(password)) {
    //   alert('영문과 숫자를 포함하여 8자리 이상의 비밀번호를 설정해주세요')
    // } else if (password !== passwordCheck) {
    //   alert('비밀번호를 확인해주세요')
    // }
    // return
    // dispatch(registerUserAsync(user))
  }

  return (
    <section className="register">
      <form onSubmit={e => handleSubmit(e)} className="register__form">
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
                value={user.username}
                onChange={e => handleChangeUser(e)}
              ></Input>
            </InputGroup>
          </FormControl>
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
                value={user.password}
                onChange={e => handleChangeUser(e)}
              ></Input>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <Text mb="8px">비밀번호확인</Text>
            <InputGroup borderColor="#ccc">
              <InputLeftElement>
                {<CFaLock color="gray.300" />}
              </InputLeftElement>
              <Input
                type="password"
                placeholder="비밀번호를 재 입력하세요"
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
              ></Input>
            </InputGroup>
          </FormControl>
          <RegisterButton type="submit" className="submit__btn">
            회원가입
          </RegisterButton>

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
